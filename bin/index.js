#!/usr/bin/env node

import introduction from "../lib/introduction.js";
import quizSelector from "../lib/quizSelector.js";

introduction();
setTimeout(() => {
  quizSelector();
}, 500);
