'use strict';

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Component1 = require('../../src/components/component1'); 

describe('component1', function () {
  it('renders without problems', function () {
    var component1 = TestUtils.renderIntoDocument(<Component1/>);
    expect(component1).not.toBeUndefined();
  });
});