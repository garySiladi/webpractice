import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
var chai = require('chai');
var assert = chai.assert;
const blogs = require('../api/blogs.json');
import EmbedTrack from '../src/client/components/soundcloudTrack.js';
import Header from '../src/client/components/header/header.js'

function getBlogById(id,data){
  let answer = null;
  data.map(function (blog) {
            if (blog.id == id) {
              answer = blog;
            }
          });
  return answer;
}

describe('getBlogById', function() {
  it('should return the right title', function() {
    var element = getBlogById(6,blogs);
    chai.assert.equal(element.title, 'SHADOWVERSE: THE CCG WITH A “WIN THE MATCH” CARD');
  });
  it('should not return the empty blog', function() {
    var element = getBlogById(-2,blogs);
    chai.assert.equal(element, null);
  });
});

describe('<EmbedTrack/>', function () {
  it('should have one .lazyLoad class', function () {
    const wrapper = shallow(<EmbedTrack/>);
    expect(wrapper.find('.lazyLoad')).to.have.length(1);
  });
  it('should have one iframe', function () {
    const wrapper = shallow(<EmbedTrack/>);
    expect(wrapper.find('iframe')).to.have.length(1);
  });
});

describe('<Header/>', function () {
  it('should have 3 LinkContainers', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('LinkContainer')).to.have.length(3);
  });
});
