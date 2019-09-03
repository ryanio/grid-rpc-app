import React, { Component } from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import JSONPretty from 'react-json-pretty';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import theme from 'react-json-pretty/dist/adventure_time';
import Select from 'react-select';
import pluginMethods from './rpcMethods';
import './App.css';
import {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
} from './component-utils';

let nextId = 0;

const httpTypes = [
  { value: 'http', label: 'http://' },
  { value: 'https', label: 'https://' }
];

const styles = theme => ({
  plugin: { marginBottom: 30 },
  http: { marginRight: 5 },
  method: {
    marginBottom: 15
  },
  pluginState: {
    marginBottom: 30
  },
  send: {
    marginRight: 10
  },
  errorSnackbar: {
    marginBottom: 30,
    backgroundColor: theme.palette.error.dark
  },
  errorIcon: {
    fontSize: 20,
    opacity: 0.9,
    verticalAlign: 'middle',
    marginBottom: 1,
    marginRight: 5
  },
  closeIcon: {
    opacity: 0.9
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto'
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing(2)
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plugins: [{ name: 'custom', displayName: 'Custom' }],
      pluginState: null,
      selectedPlugin: 'custom',
      http: 'http',
      host: 'localhost',
      port: '8545',
      method: '',
      params: '',
      result: null,
      error: null
    };
  }

  componentDidMount() {
    this.getPlugins();
  }

  selectedPluginRef = () => {
    const { plugins, selectedPlugin } = this.state;
    return plugins.find(p => p.name === selectedPlugin);
  };

  getPlugins = async () => {
    let plugins = [{ name: 'custom', displayName: 'Custom' }];
    if (window.grid) {
      const gridPlugins = window.grid.getAllPlugins();
      const gridPluginsWithRpc = gridPlugins.filter(p => p.sendRpc);
      plugins = [...gridPluginsWithRpc, ...plugins];
    }

    this.setState({ plugins }, () => {
      this.handleChange('selectedPlugin')({
        target: { value: plugins[0].name }
      });
    });
  };

  updatePluginState = pluginState => {
    this.setState({ pluginState: pluginState.toUpperCase() });
  };

  handleChange = field => async event => {
    const oldSelectedPluginRef = this.selectedPluginRef();
    // react-select events: { label: 'example', value: 'example' }
    let value = event.value;
    if (event.target && event.target.value) {
      value = event.target.value;
    }

    this.setState({ [field]: value, error: null }, () => {
      if (field === 'selectedPlugin') {
        let pluginState = null;
        if (value !== 'custom') {
          pluginState = this.selectedPluginRef().getState();
          this.setState({ pluginState });
          this.selectedPluginRef().on('newState', this.updatePluginState);
          if (oldSelectedPluginRef.off) {
            oldSelectedPluginRef.off('newState', this.updatePluginState);
          }
        }
      }
    });
  };

  reset = () => {
    this.setState({ method: '', params: '', error: null, result: null });
  };

  send = async () => {
    const { selectedPlugin, method, pluginState } = this.state;
    let { params } = this.state;
    if (!params || params === '') {
      params = [];
    } else {
      try {
        params = JSON.parse(params.replace(/'/g, '"'));
      } catch (error) {
        this.setState({ error: `Unable to parse params: ${error}` });
      }
    }
    if (selectedPlugin !== 'custom') {
      if (pluginState !== 'CONNECTED') {
        this.setState({
          error: 'Plugin not connected, please restart plugin and try again.'
        });
        return;
      }
      const result = await this.selectedPluginRef().sendRpc(method, params);
      this.setState({ result });
    } else {
      const { http, host, port } = this.state;
      let message = {
        id: nextId++,
        jsonrpc: '2.0',
        method,
        params
      };
      try {
        message = JSON.stringify(message);
        const ssl = httpTypes.find(h => h.value === http).label;
        const server = `${ssl}${host}:${port}`;
        const rawResponse = await fetch(server, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: message
        });
        const result = await rawResponse.json();
        this.setState({ result });
      } catch (error) {
        console.error(error);
      }
    }
  };

  renderError() {
    const { classes } = this.props;
    const { error } = this.state;
    if (!error) {
      return;
    }
    return (
      <SnackbarContent
        classes={{ root: classes.errorSnackbar }}
        message={
          <span>
            <ErrorIcon className={classes.errorIcon} />
            {error}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.setState({ error: null })}
          >
            <CloseIcon classes={{ root: classes.closeIcon }} />
          </IconButton>
        ]}
      />
    );
  }

  renderForm() {
    const { classes } = this.props;
    const {
      http,
      host,
      port,
      method,
      params,
      plugins,
      selectedPlugin,
      pluginState
    } = this.state;

    const selectStyles = {
      input: base => ({
        ...base,
        // color: theme.palette.text.primary,
        '& input': {
          font: 'inherit'
        }
      })
    };

    let methods = [];
    let exampleParams = '[]';
    if (pluginMethods[selectedPlugin]) {
      methods = pluginMethods[selectedPlugin].map(m => ({
        label: m.method,
        value: m.method
      }));

      const pluginMethod = pluginMethods[selectedPlugin].find(
        m => m.method === method
      );
      if (pluginMethod && pluginMethod.exampleParams) {
        exampleParams = pluginMethod.exampleParams;
      }
    }

    const components = {
      Control,
      Menu,
      MultiValue,
      NoOptionsMessage,
      Option,
      Placeholder,
      SingleValue,
      ValueContainer
    };

    return (
      <div className="form">
        <div className="plugin">
          <TextField
            label="Plugin"
            value={selectedPlugin}
            select
            className={classes.plugin}
            onChange={this.handleChange('selectedPlugin')}
          >
            {plugins.map(plugin => (
              <MenuItem key={plugin.name} value={plugin.name}>
                {plugin.displayName}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {selectedPlugin !== 'custom' && (
          <div className={classes.pluginState}>
            State: <strong>{pluginState}</strong>
          </div>
        )}
        {selectedPlugin === 'custom' && (
          <div className="server section-form section-outline">
            <h4>Server</h4>
            <div className="server-fields">
              <TextField
                select
                className={classes.http}
                label=" "
                value={http}
                onChange={this.handleChange('http')}
                inline
              >
                {httpTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Host"
                value={host}
                placeholder="localhost"
                onChange={this.handleChange('host')}
                inline
              />
              <span className="colon">:</span>
              <TextField
                label="Port"
                value={port}
                placeholder="8545"
                onChange={this.handleChange('port')}
                inline
              />
            </div>
          </div>
        )}
        <div className="message section-outline section-form">
          <h4>Message</h4>
          <div className="section-json">
            <div>
              {selectedPlugin !== 'geth' && selectedPlugin !== 'parity' && (
                <TextField
                  label="Method"
                  value={method}
                  className={classes.method}
                  onChange={this.handleChange('method')}
                />
              )}
              {(selectedPlugin === 'geth' || selectedPlugin === 'parity') && (
                <Select
                  classes={classes}
                  className={classes.method}
                  styles={selectStyles}
                  inputId="react-select-single"
                  TextFieldProps={{
                    InputLabelProps: {
                      htmlFor: 'react-select-single',
                      shrink: true
                    }
                  }}
                  placeholder="Method"
                  options={methods}
                  components={components}
                  value={method && { label: method, value: method }}
                  onChange={this.handleChange('method')}
                />
              )}
            </div>
            <div>
              <TextField
                multiline
                label="Params"
                placeholder={exampleParams}
                value={params}
                onChange={this.handleChange('params')}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderButtons() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.send}
          onClick={() => this.send()}
        >
          Send
        </Button>
        <Button onClick={() => this.reset()}>Reset</Button>
      </div>
    );
  }

  renderResult() {
    const { result } = this.state;
    if (!result) {
      return null;
    }
    return (
      <div className="result">
        <h5>Result:</h5>
        <JSONPretty id="json-pretty" data={result} theme={theme}></JSONPretty>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Grid RPC Tester</h1>
        </header>
        <div className="container">
          {this.renderForm()}
          {this.renderError()}
          {this.renderButtons()}
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
