/**
 * @license
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import expect from "expect";

import HyperHTMLELement from "hyperhtml-element";
const { hyper } = HyperHTMLELement;

import {
  ComponentWithoutChildren,
  ComponentWithChildren,
  ComponentWithChildrenRerender,
  ComponentWithDifferentViews,
  ComponentWithProperties,
  ComponentWithImperativeEvent,
  ComponentWithDeclarativeEvent
} from "./components";

// Setup the test harness. This will get cleaned out with every test.
let app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);
let root; // This will hold the actual element under test.

beforeEach(function() {
  root = document.createElement("div");
  app.appendChild(root);
});

afterEach(function() {
  app.innerHTML = "";
  root = null;
});

describe("advanced support", function() {

  describe("events", function() {
    it("can declaratively listen to a kebab-case DOM event dispatched by a Custom Element", function(done) {
      this.weight = 1;
      root.appendChild(new ComponentWithDeclarativeEvent());
      setTimeout(function() {
        let wc = root.querySelector("#wc");
        let handled = root.querySelector("#kebab");
        expect(handled.textContent).toEqual("false");
        wc.click();
        expect(handled.textContent).toEqual("true");
        done();
      }, 10);
    });

    it("can declaratively listen to a camelCase DOM event dispatched by a Custom Element", function(done) {
      this.weight = 1;
      root.appendChild(new ComponentWithDeclarativeEvent());
      setTimeout(function() {
        let wc = root.querySelector("#wc");
        let handled = root.querySelector("#camel");
        expect(handled.textContent).toEqual("false");
        wc.click();
        expect(handled.textContent).toEqual("true");
        done();
      }, 10);
    });

    it("can declaratively listen to a CAPScase DOM event dispatched by a Custom Element", function(done) {
      this.weight = 1;
      root.appendChild(new ComponentWithDeclarativeEvent());
      setTimeout(function() {
        let wc = root.querySelector("#wc");
        let handled = root.querySelector("#caps");
        expect(handled.textContent).toEqual("false");
        wc.click();
        expect(handled.textContent).toEqual("true");
        done();
      }, 10);
    });

    it("can declaratively listen to a PascalCase DOM event dispatched by a Custom Element", function(done) {
      this.weight = 1;
      root.appendChild(new ComponentWithDeclarativeEvent());
      setTimeout(function() {
        let wc = root.querySelector("#wc");
        let handled = root.querySelector("#pascal");
        expect(handled.textContent).toEqual("false");
        wc.click();
        expect(handled.textContent).toEqual("true");
        done();
      }, 10);
    });
  });

});