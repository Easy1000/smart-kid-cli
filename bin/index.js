#!/usr/bin/env node

import introduction from "../lib/introduction.js";
import quizSelector from "../lib/quiz.js";

introduction();
setTimeout(() => {
  quizSelector();
}, 500);
