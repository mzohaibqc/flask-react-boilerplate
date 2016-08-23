import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';
 
import routes from './routes';
import template from './template.ejs';
import image from './images/user.png'
// Client rendering 
if (typeof document !== 'undefined') {
  render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
}
 
// Exported static site renderer: 
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);
 console.log(locals);
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    
    callback(null, template({
      html: renderToString(<RouterContext {...renderProps} />),
      assets: locals.assets
    }));
  });
};