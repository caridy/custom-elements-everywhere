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

 import { buildCustomElementConstructor } from "lwc";

import LWCWithoutChildren from 'components/ComponentWithoutChildren';
import LWCWithChildren from 'components/ComponentWithChildren';
import LWCWithChildrenRerender from 'components/ComponentWithChildrenRerender';
import LWCWithDifferentViews from 'components/ComponentWithDifferentViews';
import LWCWithProperties from 'components/ComponentWithProperties';
import LWCWithUnregistered from 'components/ComponentWithUnregistered';
import LWCWithImperativeEvent from 'components/ComponentWithImperativeEvent';
import LWCWithDeclarativeEvent from 'components/ComponentWithDeclarativeEvent';

const ComponentWithoutChildren = buildCustomElementConstructor(LWCWithoutChildren);
const ComponentWithChildren = buildCustomElementConstructor(LWCWithChildren);
const ComponentWithChildrenRerender = buildCustomElementConstructor(LWCWithChildrenRerender);
const ComponentWithDifferentViews = buildCustomElementConstructor(LWCWithDifferentViews);
const ComponentWithProperties = buildCustomElementConstructor(LWCWithProperties);
const ComponentWithUnregistered = buildCustomElementConstructor(LWCWithUnregistered);
const ComponentWithImperativeEvent = buildCustomElementConstructor(LWCWithImperativeEvent);
const ComponentWithDeclarativeEvent = buildCustomElementConstructor(LWCWithDeclarativeEvent);

customElements.define('component-without-children', ComponentWithoutChildren);
customElements.define('component-with-children', ComponentWithChildren);
customElements.define('component-with-children-rerender', ComponentWithChildrenRerender);
customElements.define('component-with-different-views', ComponentWithDifferentViews);
customElements.define('component-with-properties', ComponentWithProperties);
customElements.define('component-with-unregistered', ComponentWithUnregistered);
customElements.define('component-with-imperative-event', ComponentWithImperativeEvent);
customElements.define('component-with-declarative-event', ComponentWithDeclarativeEvent);

export {
    ComponentWithoutChildren,
    ComponentWithChildren,
    ComponentWithChildrenRerender,
    ComponentWithDifferentViews,
    ComponentWithProperties,
    ComponentWithUnregistered,
    ComponentWithImperativeEvent,
    ComponentWithDeclarativeEvent,
}
