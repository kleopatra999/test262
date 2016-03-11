// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `import` declaration
esid: sec-modules
negative: SyntaxError
flags: [module]
---*/

try { } catch (err) {
  import v from './decl-pos-import-try-catch.js';
}
