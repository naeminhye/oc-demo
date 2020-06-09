var oc=oc||{};oc.components=oc.components||{};oc.components['0853c8e6b719c28c832f65926abd5e8267c331c0']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-react-component-" + randomId;
  return '<div id="'+ reactRootId +'" class="oc-reactRoot-react-component">' + modelHTML + '</div>' +
    '<style>.oc__react-component-styles-css__special__1TUALi3n{background:#db7093;color:#fff}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__react-component-styles-css__special__1TUALi3n{background:#db7093;color:#fff}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.9.0/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "0254f4732a629a309aed710f0d8819d66e18f8a9"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}