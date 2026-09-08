# Learning
Core JavaScript concepts — one mini-exercise per subfolder, each a self-contained `index.html` + `index.js` (some also include a matching `style.css`).

## 📁 Folders by topic

**Fundamentals**
| Folder | Topic |
|---|---|
| `step1` | First "hello world" DOM exercise |
| `variables` | Declaring variables (`let`) |
| `constants` | `const`, computed values (circle circumference example) |
| `type_conversion` | `Number()`, `String()`, `Boolean()` conversions |
| `strict_equality` | `==` vs `===`, `!=` vs `!==` |
| `arithmetic_operations` | `+ - * / ** %` |
| `ternary_operator` | Conditional (`? :`) expressions |
| `if_statement` | `if / else if / else` |
| `switches` | `switch` statements |
| `for_loops` / `while_loops` | Loops |
| `Logical_operators` | `&& \|\| !` |
| `variable_scope` | Function vs block scope |
| `user_input` | `window.prompt()` and reading form input |

**Functions & control flow**
| Folder | Topic |
|---|---|
| `functions` | Function declarations |
| `arrow_functions` | Arrow function syntax |
| `function_expressions` | Functions as values |
| `rest_parametrs` | Rest parameters (`...args`) |
| `spread_operator` | Spread syntax |
| `closures` | Closures & private state (counter example) |
| `callbacks` / `callbakcs` | Callback functions (duplicate folder, kept as-is) |
| `callback_hell` | Nested callback example |
| `setTimeout` | Delayed execution |

**Strings, Math & Dates**
| Folder | Topic |
|---|---|
| `strings` | String methods (`trim`, `slice`, `toUpperCase`, etc.) |
| `string_slicing` | `.slice()` in depth |
| `method_chaining` | Chaining string methods |
| `math_object` | Built-in `Math` methods |
| `dates` | `Date` object |
| `random_generator` | Dice-roll mini exercise using `Math.random()` |
| `shuffle_an_array` | Fisher–Yates shuffle (card deck) |

**Arrays & data structures**
| Folder | Topic |
|---|---|
| `arrays` | Array basics (`push`, `pop`, `shift`, `unshift`) |
| `arrays_of_objects` | Arrays containing objects |
| `forEach` / `map` / `filter` / `reduce` | Array iteration methods |
| `sorting` | `.sort()` with comparators |
| `destructuring` | Array/object destructuring |
| `nested_objects` | Objects within objects |
| `jsonfiles` | `JSON.stringify()` / `JSON.parse()` |

**Objects & OOP**
| Folder | Topic |
|---|---|
| `objects` | Object literals & methods |
| `classes` | ES6 classes |
| `constructors` | Constructor functions |
| `inheritance` | `extends` |
| `super` | `super()` in child classes |
| `static` | Static properties/methods |
| `getters_setters` | `get` / `set` |
| `this` | `this` binding |

**Async, Promises & errors**
| Folder | Topic |
|---|---|
| `promises` | `Promise` (resolve/reject) |
| `async_await` | `async` / `await` syntax |
| `synchronuos_asynchronous` | Sync vs async execution order |
| `data_api` | `fetch()` for HTTP requests |
| `error` | `try / catch / finally` |

**DOM & events**
| Folder | Topic |
|---|---|
| `DOM` | Core DOM basics |
| `DOM_navigation` | `firstElementChild`, `lastElementChild`, etc. |
| `document_selectors` | `getElementById`, `getElementsByClassName`, etc. |
| `add_and_change_html` | Creating/inserting elements |
| `classlist` | `classList.add/remove/toggle/replace` |
| `nodelist` | Static NodeLists from `querySelectorAll` |
| `hide_show` | Toggling element visibility |
| `checked_property` | Checkbox/radio `.checked` state |
| `key_events` | `keydown` / `keyup` listeners |
| `mouse_events` | `click` / `mouseover` / `mouseout` |

**Modules**
| Folder | Topic |
|---|---|
| `ES6_module` | `import` / `export` between files (`mathUtil.js`) |

**Mini-projects**
| Folder | Content |
|---|---|
| `calculator` | Working calculator UI |
| `counter` | Increment/decrease/reset counter |
| `digital_clock` | Live-updating clock |
| `stopwhatch` | Start/stop/reset stopwatch |

## 🚀 Running
Every exercise is self-contained. Open the folder's `index.html` in your browser — it loads the matching `index.js` (and `style.css` where present).

## 📌 Notes
- A few folder names carry typos from the original commits (`rest_parametrs`, `stopwhatch`, `synchronuos_asynchronous`, `callbakcs`) — left unchanged to match the actual repo.
- `callbacks` and `callbakcs` are duplicate exercises on the same topic.
- `digital_clock` and `stopwhatch` each bundle the same background image asset (`21593.jpg`).
- This is an active learning log — new topic folders are added as coursework progresses.

<sub>Note: written while following Bro Code's JavaScript tutorials on YouTube; original teaching content © Bro Code.</sub>

## ✍️ Author
Maintained by Egor as part of ongoing JavaScript coursework.