#!/usr/bin/env node

import introduction from "../lib/introduction.js";
import quiz from "../lib/quiz.js";

introduction();
setTimeout(() => {
  quiz();
}, 500);
