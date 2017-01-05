import superagent from 'superagent';
import React, {PropTypes} from 'react';
import {checkShowLoading} from '../utils';

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del',
  'options',
  'patch'
];

class _Api {
  constructor(opts) {
     // var _self = this;
    this.opts = opts || {};

    if (!this.opts.baseURI)
      throw new Error('baseURI option is required');
      //var _self = this;
    methods.forEach(method =>
      this[method] = (path, {baseURI, params, data, headers } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method]((baseURI || this.opts.baseURI) + path);
        if (params) {
          request.query(params);
        }
        if(headers){
            Object.assign(this.opts.headers, headers);
        }

        if (this.opts.headers) {
          request.set(this.opts.headers);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) =>{
            err ? reject(body || err) : resolve(body)
        })
     }))
    }

   }
const Api = _Api;

export default Api;
