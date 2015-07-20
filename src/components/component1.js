'use strict';

var React = require('react');

var Component1 = React.createClass({displayName: 'Component1',
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className="main">
          Component1 Is Rendering!
      </div>
    );
  }
});

module.exports = Component1;