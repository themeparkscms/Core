        /*=================================
                                      01jquery1.12.0.min.js
                                ==================================*/

        // JavaScript Document
        /*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
        ! function (a, b) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
                if (!a.document) throw new Error("jQuery requires a window with a document");
                return b(a)
            } : b(a)
        }("undefined" != typeof window ? window : this, function (a, b) {
            var c = []
                , d = a.document
                , e = c.slice
                , f = c.concat
                , g = c.push
                , h = c.indexOf
                , i = {}
                , j = i.toString
                , k = i.hasOwnProperty
                , l = {}
                , m = "1.12.0"
                , n = function (a, b) {
                    return new n.fn.init(a, b)
                }
                , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , p = /^-ms-/
                , q = /-([\da-z])/gi
                , r = function (a, b) {
                    return b.toUpperCase()
                };
            n.fn = n.prototype = {
                jquery: m
                , constructor: n
                , selector: ""
                , length: 0
                , toArray: function () {
                    return e.call(this)
                }
                , get: function (a) {
                    return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
                }
                , pushStack: function (a) {
                    var b = n.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                }
                , each: function (a) {
                    return n.each(this, a)
                }
                , map: function (a) {
                    return this.pushStack(n.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                }
                , slice: function () {
                    return this.pushStack(e.apply(this, arguments))
                }
                , first: function () {
                    return this.eq(0)
                }
                , last: function () {
                    return this.eq(-1)
                }
                , eq: function (a) {
                    var b = this.length
                        , c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                }
                , end: function () {
                    return this.prevObject || this.constructor()
                }
                , push: g
                , sort: c.sort
                , splice: c.splice
            }, n.extend = n.fn.extend = function () {
                var a, b, c, d, e, f, g = arguments[0] || {}
                    , h = 1
                    , i = arguments.length
                    , j = !1;
                for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                    if (null != (e = arguments[h]))
                        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
                return g
            }, n.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, "")
                , isReady: !0
                , error: function (a) {
                    throw new Error(a)
                }
                , noop: function () {}
                , isFunction: function (a) {
                    return "function" === n.type(a)
                }
                , isArray: Array.isArray || function (a) {
                    return "array" === n.type(a)
                }
                , isWindow: function (a) {
                    return null != a && a == a.window
                }
                , isNumeric: function (a) {
                    var b = a && a.toString();
                    return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
                }
                , isEmptyObject: function (a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                }
                , isPlainObject: function (a) {
                    var b;
                    if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    if (!l.ownFirst)
                        for (b in a) return k.call(a, b);
                    for (b in a);
                    return void 0 === b || k.call(a, b)
                }
                , type: function (a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
                }
                , globalEval: function (b) {
                    b && n.trim(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                }
                , camelCase: function (a) {
                    return a.replace(p, "ms-").replace(q, r)
                }
                , nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                }
                , each: function (a, b) {
                    var c, d = 0;
                    if (s(a)) {
                        for (c = a.length; c > d; d++)
                            if (b.call(a[d], d, a[d]) === !1) break
                    } else
                        for (d in a)
                            if (b.call(a[d], d, a[d]) === !1) break; return a
                }
                , trim: function (a) {
                    return null == a ? "" : (a + "").replace(o, "")
                }
                , makeArray: function (a, b) {
                    var c = b || [];
                    return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
                }
                , inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (h) return h.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                }
                , merge: function (a, b) {
                    var c = +b.length
                        , d = 0
                        , e = a.length;
                    while (c > d) a[e++] = b[d++];
                    if (c !== c)
                        while (void 0 !== b[d]) a[e++] = b[d++];
                    return a.length = e, a
                }
                , grep: function (a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                    return e
                }
                , map: function (a, b, c) {
                    var d, e, g = 0
                        , h = [];
                    if (s(a))
                        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                    else
                        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                    return f.apply([], h)
                }
                , guid: 1
                , proxy: function (a, b) {
                    var c, d, f;
                    return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
                        return a.apply(b || this, c.concat(e.call(arguments)))
                    }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
                }
                , now: function () {
                    return +new Date
                }
                , support: l
            }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
                i["[object " + b + "]"] = b.toLowerCase()
            });

            function s(a) {
                var b = !!a && "length" in a && a.length
                    , c = n.type(a);
                return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
            }
            var t = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date
                    , v = a.document
                    , w = 0
                    , x = 0
                    , y = ga()
                    , z = ga()
                    , A = ga()
                    , B = function (a, b) {
                        return a === b && (l = !0), 0
                    }
                    , C = 1 << 31
                    , D = {}.hasOwnProperty
                    , E = []
                    , F = E.pop
                    , G = E.push
                    , H = E.push
                    , I = E.slice
                    , J = function (a, b) {
                        for (var c = 0, d = a.length; d > c; c++)
                            if (a[c] === b) return c;
                        return -1
                    }
                    , K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
                    , L = "[\\x20\\t\\r\\n\\f]"
                    , M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
                    , N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]"
                    , O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)"
                    , P = new RegExp(L + "+", "g")
                    , Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g")
                    , R = new RegExp("^" + L + "*," + L + "*")
                    , S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*")
                    , T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g")
                    , U = new RegExp(O)
                    , V = new RegExp("^" + M + "$")
                    , W = {
                        ID: new RegExp("^#(" + M + ")")
                        , CLASS: new RegExp("^\\.(" + M + ")")
                        , TAG: new RegExp("^(" + M + "|[*])")
                        , ATTR: new RegExp("^" + N)
                        , PSEUDO: new RegExp("^" + O)
                        , CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i")
                        , bool: new RegExp("^(?:" + K + ")$", "i")
                        , needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                    }
                    , X = /^(?:input|select|textarea|button)$/i
                    , Y = /^h\d$/i
                    , Z = /^[^{]+\{\s*\[native \w/
                    , $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
                    , _ = /[+~]/
                    , aa = /'|\\/g
                    , ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig")
                    , ca = function (a, b, c) {
                        var d = "0x" + b - 65536;
                        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                    }
                    , da = function () {
                        m()
                    };
                try {
                    H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
                } catch (ea) {
                    H = {
                        apply: E.length ? function (a, b) {
                            G.apply(a, I.call(b))
                        } : function (a, b) {
                            var c = a.length
                                , d = 0;
                            while (a[c++] = b[d++]);
                            a.length = c - 1
                        }
                    }
                }

                function fa(a, b, d, e) {
                    var f, h, j, k, l, o, r, s, w = b && b.ownerDocument
                        , x = b ? b.nodeType : 9;
                    if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                    if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                        if (11 !== x && (o = $.exec(a)))
                            if (f = o[1]) {
                                if (9 === x) {
                                    if (!(j = b.getElementById(f))) return d;
                                    if (j.id === f) return d.push(j), d
                                } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                            } else {
                                if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                                if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                            }
                        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                            if (1 !== x) w = b, s = a;
                            else if ("object" !== b.nodeName.toLowerCase()) {
                                (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                                while (h--) r[h] = l + " " + qa(r[h]);
                                s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                            }
                            if (s) try {
                                return H.apply(d, w.querySelectorAll(s)), d
                            } catch (y) {} finally {
                                k === u && b.removeAttribute("id")
                            }
                        }
                    }
                    return i(a.replace(Q, "$1"), b, d, e)
                }

                function ga() {
                    var a = [];

                    function b(c, e) {
                        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                    }
                    return b
                }

                function ha(a) {
                    return a[u] = !0, a
                }

                function ia(a) {
                    var b = n.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function ja(a, b) {
                    var c = a.split("|")
                        , e = c.length;
                    while (e--) d.attrHandle[c[e]] = b
                }

                function ka(a, b) {
                    var c = b && a
                        , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                    if (d) return d;
                    if (c)
                        while (c = c.nextSibling)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function la(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function ma(a) {
                    return function (b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function na(a) {
                    return ha(function (b) {
                        return b = +b, ha(function (c, d) {
                            var e, f = a([], c.length, b)
                                , g = f.length;
                            while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function oa(a) {
                    return a && "undefined" != typeof a.getElementsByTagName && a
                }
                c = fa.support = {}, f = fa.isXML = function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }, m = fa.setDocument = function (a) {
                    var b, e, g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), c.getElementsByTagName = ia(function (a) {
                        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                    }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
                        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                    }), c.getById ? (d.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c ? [c] : []
                        }
                    }, d.filter.ID = function (a) {
                        var b = a.replace(ba, ca);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete d.find.ID, d.filter.ID = function (a) {
                        var b = a.replace(ba, ca);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    } : function (a, b) {
                        var c, d = []
                            , e = 0
                            , f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++]) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                    }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                    }), ia(function (a) {
                        var b = n.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                    }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a
                            , d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)
                            while (b = b.parentNode)
                                if (b === a) return !0;
                        return !1
                    }, B = b ? function (a, b) {
                        if (a === b) return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    } : function (a, b) {
                        if (a === b) return l = !0, 0;
                        var c, d = 0
                            , e = a.parentNode
                            , f = b.parentNode
                            , g = [a]
                            , h = [b];
                        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f) return ka(a, b);
                        c = a;
                        while (c = c.parentNode) g.unshift(c);
                        c = b;
                        while (c = c.parentNode) h.unshift(c);
                        while (g[d] === h[d]) d++;
                        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                    }, n) : n
                }, fa.matches = function (a, b) {
                    return fa(a, null, null, b)
                }, fa.matchesSelector = function (a, b) {
                    if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {}
                    return fa(b, n, null, [a]).length > 0
                }, fa.contains = function (a, b) {
                    return (a.ownerDocument || a) !== n && m(a), t(a, b)
                }, fa.attr = function (a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()]
                        , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
                }, fa.error = function (a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }, fa.uniqueSort = function (a) {
                    var b, d = []
                        , e = 0
                        , f = 0;
                    if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                        while (b = a[f++]) b === a[f] && (e = d.push(f));
                        while (e--) a.splice(d[e], 1)
                    }
                    return k = null, a
                }, e = fa.getText = function (a) {
                    var b, c = ""
                        , d = 0
                        , f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                        } else if (3 === f || 4 === f) return a.nodeValue
                    } else
                        while (b = a[d++]) c += e(b);
                    return c
                }, d = fa.selectors = {
                    cacheLength: 50
                    , createPseudo: ha
                    , match: W
                    , attrHandle: {}
                    , find: {}
                    , relative: {
                        ">": {
                            dir: "parentNode"
                            , first: !0
                        }
                        , " ": {
                            dir: "parentNode"
                        }
                        , "+": {
                            dir: "previousSibling"
                            , first: !0
                        }
                        , "~": {
                            dir: "previousSibling"
                        }
                    }
                    , preFilter: {
                        ATTR: function (a) {
                            return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        }
                        , CHILD: function (a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                        }
                        , PSEUDO: function (a) {
                            var b, c = !a[6] && a[2];
                            return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                        }
                    }
                    , filter: {
                        TAG: function (a) {
                            var b = a.replace(ba, ca).toLowerCase();
                            return "*" === a ? function () {
                                return !0
                            } : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        }
                        , CLASS: function (a) {
                            var b = y[a + " "];
                            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            })
                        }
                        , ATTR: function (a, b, c) {
                            return function (d) {
                                var e = fa.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                            }
                        }
                        , CHILD: function (a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3)
                                , g = "last" !== a.slice(-4)
                                , h = "of-type" === b;
                            return 1 === d && 0 === e ? function (a) {
                                return !!a.parentNode
                            } : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling"
                                    , q = b.parentNode
                                    , r = h && b.nodeName.toLowerCase()
                                    , s = !i && !h
                                    , t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while (m = m[p])
                                                if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break
                                            }
                                    } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                    return t -= e, t === d || t % d === 0 && t / d >= 0
                                }
                            }
                        }
                        , PSEUDO: function (a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                                var d, f = e(a, b)
                                    , g = f.length;
                                while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                            }) : function (a) {
                                return e(a, 0, c)
                            }) : e
                        }
                    }
                    , pseudos: {
                        not: ha(function (a) {
                            var b = []
                                , c = []
                                , d = h(a.replace(Q, "$1"));
                            return d[u] ? ha(function (a, b, c, e) {
                                var f, g = d(a, null, e, [])
                                    , h = a.length;
                                while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function (a, e, f) {
                                return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                            }
                        })
                        , has: ha(function (a) {
                            return function (b) {
                                return fa(a, b).length > 0
                            }
                        })
                        , contains: ha(function (a) {
                            return a = a.replace(ba, ca)
                                , function (b) {
                                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                                }
                        })
                        , lang: ha(function (a) {
                            return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase()
                                , function (b) {
                                    var c;
                                    do
                                        if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1
                                }
                        })
                        , target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        }
                        , root: function (a) {
                            return a === o
                        }
                        , focus: function (a) {
                            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        }
                        , enabled: function (a) {
                            return a.disabled === !1
                        }
                        , disabled: function (a) {
                            return a.disabled === !0
                        }
                        , checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        }
                        , selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        }
                        , empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6) return !1;
                            return !0
                        }
                        , parent: function (a) {
                            return !d.pseudos.empty(a)
                        }
                        , header: function (a) {
                            return Y.test(a.nodeName)
                        }
                        , input: function (a) {
                            return X.test(a.nodeName)
                        }
                        , button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        }
                        , text: function (a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        }
                        , first: na(function () {
                            return [0]
                        })
                        , last: na(function (a, b) {
                            return [b - 1]
                        })
                        , eq: na(function (a, b, c) {
                            return [0 > c ? c + b : c]
                        })
                        , even: na(function (a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a
                        })
                        , odd: na(function (a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a
                        })
                        , lt: na(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                            return a
                        })
                        , gt: na(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                            return a
                        })
                    }
                }, d.pseudos.nth = d.pseudos.eq;
                for (b in {
                        radio: !0
                        , checkbox: !0
                        , file: !0
                        , password: !0
                        , image: !0
                    }) d.pseudos[b] = la(b);
                for (b in {
                        submit: !0
                        , reset: !0
                    }) d.pseudos[b] = ma(b);

                function pa() {}
                pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    h = a, i = [], j = d.preFilter;
                    while (h) {
                        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                            value: c
                            , type: e[0].replace(Q, " ")
                        }), h = h.slice(c.length));
                        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                            value: c
                            , type: g
                            , matches: e
                        }), h = h.slice(c.length));
                        if (!c) break
                    }
                    return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
                };

                function qa(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                    return d
                }

                function ra(a, b, c) {
                    var d = b.dir
                        , e = c && "parentNode" === d
                        , f = x++;
                    return b.first ? function (b, c, f) {
                        while (b = b[d])
                            if (1 === b.nodeType || e) return a(b, c, f)
                    } : function (b, c, g) {
                        var h, i, j, k = [w, f];
                        if (g) {
                            while (b = b[d])
                                if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else
                            while (b = b[d])
                                if (1 === b.nodeType || e) {
                                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                    if (i[d] = k, k[2] = a(b, c, g)) return !0
                                }
                    }
                }

                function sa(a) {
                    return a.length > 1 ? function (b, c, d) {
                        var e = a.length;
                        while (e--)
                            if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
                }

                function ta(a, b, c) {
                    for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                    return c
                }

                function ua(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                    return g
                }

                function va(a, b, c, d, e, f) {
                    return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
                        var j, k, l, m = []
                            , n = []
                            , o = g.length
                            , p = f || ta(b || "*", h.nodeType ? [h] : h, [])
                            , q = !a || !f && b ? p : ua(p, m, a, h, i)
                            , r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i), d) {
                            j = ua(r, n), d(j, [], h, i), k = j.length;
                            while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                        }
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    j = [], k = r.length;
                                    while (k--)(l = r[k]) && j.push(q[k] = l);
                                    e(null, r = [], j, i)
                                }
                                k = r.length;
                                while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                    })
                }

                function wa(a) {
                    for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                            return a === b
                        }, h, !0), l = ra(function (a) {
                            return J(b, a) > -1
                        }, h, !0), m = [function (a, c, d) {
                            var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return b = null, e
                        }]; f > i; i++)
                        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                        else {
                            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                                for (e = ++i; f > e; e++)
                                    if (d.relative[a[e].type]) break;
                                return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*" : ""
                                })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                            }
                            m.push(c)
                        }
                    return sa(m)
                }

                function xa(a, b) {
                    var c = b.length > 0
                        , e = a.length > 0
                        , f = function (f, g, h, i, k) {
                            var l, o, q, r = 0
                                , s = "0"
                                , t = f && []
                                , u = []
                                , v = j
                                , x = f || e && d.find.TAG("*", k)
                                , y = w += null == v ? 1 : Math.random() || .1
                                , z = x.length;
                            for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                                if (e && l) {
                                    o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                    while (q = a[o++])
                                        if (q(l, g || n, h)) {
                                            i.push(l);
                                            break
                                        }
                                    k && (w = y)
                                }
                                c && ((l = !q && l) && r--, f && t.push(l))
                            }
                            if (r += s, c && s !== r) {
                                o = 0;
                                while (q = b[o++]) q(t, u, g, h);
                                if (f) {
                                    if (r > 0)
                                        while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                    u = ua(u)
                                }
                                H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                            }
                            return k && (w = y, j = v), t
                        };
                    return c ? ha(f) : f
                }
                return h = fa.compile = function (a, b) {
                    var c, d = []
                        , e = []
                        , f = A[a + " "];
                    if (!f) {
                        b || (b = g(a)), c = b.length;
                        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                        f = A(a, xa(e, d)), f.selector = a
                    }
                    return f
                }, i = fa.select = function (a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a
                        , o = !f && g(a = n.selector || a);
                    if (e = e || [], 1 === o.length) {
                        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                            n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                        }
                        i = W.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (k = j[i], d.relative[l = k.type]) break;
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                                if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                                break
                            }
                        }
                    }
                    return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
                }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"))
                }), ia(function (a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || ja("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), c.attributes && ia(function (a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || ja("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), ia(function (a) {
                    return null == a.getAttribute("disabled")
                }) || ja(K, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                }), fa
            }(a);
            n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
            var u = function (a, b, c) {
                    var d = []
                        , e = void 0 !== c;
                    while ((a = a[b]) && 9 !== a.nodeType)
                        if (1 === a.nodeType) {
                            if (e && n(a).is(c)) break;
                            d.push(a)
                        }
                    return d
                }
                , v = function (a, b) {
                    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c
                }
                , w = n.expr.match.needsContext
                , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
                , y = /^.[^:#\[\.,]*$/;

            function z(a, b, c) {
                if (n.isFunction(b)) return n.grep(a, function (a, d) {
                    return !!b.call(a, d, a) !== c
                });
                if (b.nodeType) return n.grep(a, function (a) {
                    return a === b !== c
                });
                if ("string" == typeof b) {
                    if (y.test(b)) return n.filter(b, a, c);
                    b = n.filter(b, a)
                }
                return n.grep(a, function (a) {
                    return n.inArray(a, b) > -1 !== c
                })
            }
            n.filter = function (a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
            }, n.fn.extend({
                find: function (a) {
                    var b, c = []
                        , d = this
                        , e = d.length;
                    if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                        for (b = 0; e > b; b++)
                            if (n.contains(d[b], this)) return !0
                    }));
                    for (b = 0; e > b; b++) n.find(a, d[b], c);
                    return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
                }
                , filter: function (a) {
                    return this.pushStack(z(this, a || [], !1))
                }
                , not: function (a) {
                    return this.pushStack(z(this, a || [], !0))
                }
                , is: function (a) {
                    return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
                }
            });
            var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
                , C = n.fn.init = function (a, b, c) {
                    var e, f;
                    if (!a) return this;
                    if (c = c || A, "string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                        if (e[1]) {
                            if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                                for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                            return this
                        }
                        if (f = d.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return A.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = d, this.selector = a, this
                    }
                    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
                };
            C.prototype = n.fn, A = n(d);
            var D = /^(?:parents|prev(?:Until|All))/
                , E = {
                    children: !0
                    , contents: !0
                    , next: !0
                    , prev: !0
                };
            n.fn.extend({
                has: function (a) {
                    var b, c = n(a, this)
                        , d = c.length;
                    return this.filter(function () {
                        for (b = 0; d > b; b++)
                            if (n.contains(this, c[b])) return !0
                    })
                }
                , closest: function (a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                    return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
                }
                , index: function (a) {
                    return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                , add: function (a, b) {
                    return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
                }
                , addBack: function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            });

            function F(a, b) {
                do a = a[b]; while (a && 1 !== a.nodeType);
                return a
            }
            n.each({
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                }
                , parents: function (a) {
                    return u(a, "parentNode")
                }
                , parentsUntil: function (a, b, c) {
                    return u(a, "parentNode", c)
                }
                , next: function (a) {
                    return F(a, "nextSibling")
                }
                , prev: function (a) {
                    return F(a, "previousSibling")
                }
                , nextAll: function (a) {
                    return u(a, "nextSibling")
                }
                , prevAll: function (a) {
                    return u(a, "previousSibling")
                }
                , nextUntil: function (a, b, c) {
                    return u(a, "nextSibling", c)
                }
                , prevUntil: function (a, b, c) {
                    return u(a, "previousSibling", c)
                }
                , siblings: function (a) {
                    return v((a.parentNode || {}).firstChild, a)
                }
                , children: function (a) {
                    return v(a.firstChild)
                }
                , contents: function (a) {
                    return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
                }
            }, function (a, b) {
                n.fn[a] = function (c, d) {
                    var e = n.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
                }
            });
            var G = /\S+/g;

            function H(a) {
                var b = {};
                return n.each(a.match(G) || [], function (a, c) {
                    b[c] = !0
                }), b
            }
            n.Callbacks = function (a) {
                a = "string" == typeof a ? H(a) : n.extend({}, a);
                var b, c, d, e, f = []
                    , g = []
                    , h = -1
                    , i = function () {
                        for (e = a.once, d = b = !0; g.length; h = -1) {
                            c = g.shift();
                            while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                        }
                        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                    }
                    , j = {
                        add: function () {
                            return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                                n.each(b, function (b, c) {
                                    n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                                })
                            }(arguments), c && !b && i()), this
                        }
                        , remove: function () {
                            return n.each(arguments, function (a, b) {
                                var c;
                                while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                            }), this
                        }
                        , has: function (a) {
                            return a ? n.inArray(a, f) > -1 : f.length > 0
                        }
                        , empty: function () {
                            return f && (f = []), this
                        }
                        , disable: function () {
                            return e = g = [], f = c = "", this
                        }
                        , disabled: function () {
                            return !f
                        }
                        , lock: function () {
                            return e = !0, c || j.disable(), this
                        }
                        , locked: function () {
                            return !!e
                        }
                        , fireWith: function (a, c) {
                            return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                        }
                        , fire: function () {
                            return j.fireWith(this, arguments), this
                        }
                        , fired: function () {
                            return !!d
                        }
                    };
                return j
            }, n.extend({
                Deferred: function (a) {
                    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
                        , c = "pending"
                        , d = {
                            state: function () {
                                return c
                            }
                            , always: function () {
                                return e.done(arguments).fail(arguments), this
                            }
                            , then: function () {
                                var a = arguments;
                                return n.Deferred(function (c) {
                                    n.each(b, function (b, f) {
                                        var g = n.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                        })
                                    }), a = null
                                }).promise()
                            }
                            , promise: function (a) {
                                return null != a ? n.extend(a, d) : d
                            }
                        }
                        , e = {};
                    return d.pipe = d.then, n.each(b, function (a, f) {
                        var g = f[2]
                            , h = f[3];
                        d[f[1]] = g.add, h && g.add(function () {
                            c = h
                        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                            return e[f[0] + "With"](this === e ? d : this, arguments), this
                        }, e[f[0] + "With"] = g.fireWith
                    }), d.promise(e), a && a.call(e, e), e
                }
                , when: function (a) {
                    var b = 0
                        , c = e.call(arguments)
                        , d = c.length
                        , f = 1 !== d || a && n.isFunction(a.promise) ? d : 0
                        , g = 1 === f ? a : n.Deferred()
                        , h = function (a, b, c) {
                            return function (d) {
                                b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                            }
                        }
                        , i, j, k;
                    if (d > 1)
                        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                    return f || g.resolveWith(k, c), g.promise()
                }
            });
            var I;
            n.fn.ready = function (a) {
                return n.ready.promise().done(a), this
            }, n.extend({
                isReady: !1
                , readyWait: 1
                , holdReady: function (a) {
                    a ? n.readyWait++ : n.ready(!0)
                }
                , ready: function (a) {
                    (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
                }
            });

            function J() {
                d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
            }

            function K() {
                (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
            }
            n.ready.promise = function (b) {
                if (!I)
                    if (I = n.Deferred(), "complete" === d.readyState) a.setTimeout(n.ready);
                    else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
                else {
                    d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                    var c = !1;
                    try {
                        c = null == a.frameElement && d.documentElement
                    } catch (e) {}
                    c && c.doScroll && ! function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (b) {
                                return a.setTimeout(f, 50)
                            }
                            J(), n.ready()
                        }
                    }()
                }
                return I.promise(b)
            }, n.ready.promise();
            var L;
            for (L in n(l)) break;
            l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
                    var a, b, c, e;
                    c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
                })
                , function () {
                    var a = d.createElement("div");
                    l.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        l.deleteExpando = !1
                    }
                    a = null
                }();
            var M = function (a) {
                    var b = n.noData[(a.nodeName + " ").toLowerCase()]
                        , c = +a.nodeType || 1;
                    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
                }
                , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , O = /([A-Z])/g;

            function P(a, b, c) {
                if (void 0 === c && 1 === a.nodeType) {
                    var d = "data-" + b.replace(O, "-$1").toLowerCase();
                    if (c = a.getAttribute(d), "string" == typeof c) {
                        try {
                            c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                        } catch (e) {}
                        n.data(a, b, c)
                    } else c = void 0
                }
                return c
            }

            function Q(a) {
                var b;
                for (b in a)
                    if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
                return !0
            }

            function R(a, b, d, e) {
                if (M(a)) {
                    var f, g, h = n.expando
                        , i = a.nodeType
                        , j = i ? n.cache : a
                        , k = i ? a[h] : a[h] && h;
                    if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                        toJSON: n.noop
                    }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
                }
            }

            function S(a, b, c) {
                if (M(a)) {
                    var d, e, f = a.nodeType
                        , g = f ? n.cache : a
                        , h = f ? a[n.expando] : n.expando;
                    if (g[h]) {
                        if (b && (d = c ? g[h] : g[h].data)) {
                            n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                            while (e--) delete d[b[e]];
                            if (c ? !Q(d) : !n.isEmptyObject(d)) return
                        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                    }
                }
            }
            n.extend({
                    cache: {}
                    , noData: {
                        "applet ": !0
                        , "embed ": !0
                        , "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    }
                    , hasData: function (a) {
                        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
                    }
                    , data: function (a, b, c) {
                        return R(a, b, c)
                    }
                    , removeData: function (a, b) {
                        return S(a, b)
                    }
                    , _data: function (a, b, c) {
                        return R(a, b, c, !0)
                    }
                    , _removeData: function (a, b) {
                        return S(a, b, !0)
                    }
                }), n.fn.extend({
                    data: function (a, b) {
                        var c, d, e, f = this[0]
                            , g = f && f.attributes;
                        if (void 0 === a) {
                            if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                                c = g.length;
                                while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                                n._data(f, "parsedAttrs", !0)
                            }
                            return e
                        }
                        return "object" == typeof a ? this.each(function () {
                            n.data(this, a)
                        }) : arguments.length > 1 ? this.each(function () {
                            n.data(this, a, b)
                        }) : f ? P(f, a, n.data(f, a)) : void 0
                    }
                    , removeData: function (a) {
                        return this.each(function () {
                            n.removeData(this, a)
                        })
                    }
                }), n.extend({
                    queue: function (a, b, c) {
                        var d;
                        return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
                    }
                    , dequeue: function (a, b) {
                        b = b || "fx";
                        var c = n.queue(a, b)
                            , d = c.length
                            , e = c.shift()
                            , f = n._queueHooks(a, b)
                            , g = function () {
                                n.dequeue(a, b)
                            };
                        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                    }
                    , _queueHooks: function (a, b) {
                        var c = b + "queueHooks";
                        return n._data(a, c) || n._data(a, c, {
                            empty: n.Callbacks("once memory").add(function () {
                                n._removeData(a, b + "queue"), n._removeData(a, c)
                            })
                        })
                    }
                }), n.fn.extend({
                    queue: function (a, b) {
                        var c = 2;
                        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                            var c = n.queue(this, a, b);
                            n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                        })
                    }
                    , dequeue: function (a) {
                        return this.each(function () {
                            n.dequeue(this, a)
                        })
                    }
                    , clearQueue: function (a) {
                        return this.queue(a || "fx", [])
                    }
                    , promise: function (a, b) {
                        var c, d = 1
                            , e = n.Deferred()
                            , f = this
                            , g = this.length
                            , h = function () {
                                --d || e.resolveWith(f, [f])
                            };
                        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                        while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                        return h(), e.promise(b)
                    }
                })
                , function () {
                    var a;
                    l.shrinkWrapBlocks = function () {
                        if (null != a) return a;
                        a = !1;
                        var b, c, e;
                        return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
                    }
                }();
            var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i")
                , V = ["Top", "Right", "Bottom", "Left"]
                , W = function (a, b) {
                    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
                };

            function X(a, b, c, d) {
                var e, f = 1
                    , g = 20
                    , h = d ? function () {
                        return d.cur()
                    } : function () {
                        return n.css(a, b, "")
                    }
                    , i = h()
                    , j = c && c[3] || (n.cssNumber[b] ? "" : "px")
                    , k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
                if (k && k[3] !== j) {
                    j = j || k[3], c = c || [], k = +i || 1;
                    do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
                }
                return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
            }
            var Y = function (a, b, c, d, e, f, g) {
                    var h = 0
                        , i = a.length
                        , j = null == c;
                    if ("object" === n.type(c)) {
                        e = !0;
                        for (h in c) Y(a, b, h, c[h], !0, f, g)
                    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                            return j.call(n(a), c)
                        })), b))
                        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
                }
                , Z = /^(?:checkbox|radio)$/i
                , $ = /<([\w:-]+)/
                , _ = /^$|\/(?:java|ecma)script/i
                , aa = /^\s+/
                , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

            function ca(a) {
                var b = ba.split("|")
                    , c = a.createDocumentFragment();
                if (c.createElement)
                    while (b.length) c.createElement(b.pop());
                return c
            }! function () {
                var a = d.createElement("div")
                    , b = d.createDocumentFragment()
                    , c = d.createElement("input");
                a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
            }();
            var da = {
                option: [1, "<select multiple='multiple'>", "</select>"]
                , legend: [1, "<fieldset>", "</fieldset>"]
                , area: [1, "<map>", "</map>"]
                , param: [1, "<object>", "</object>"]
                , thead: [1, "<table>", "</table>"]
                , tr: [2, "<table><tbody>", "</tbody></table>"]
                , col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
                , td: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
                , _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

            function ea(a, b) {
                var c, d, e = 0
                    , f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
                if (!f)
                    for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
                return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
            }

            function fa(a, b) {
                for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
            }
            var ga = /<|&#?\w+;/
                , ha = /<tbody/i;

            function ia(a) {
                Z.test(a.type) && (a.defaultChecked = a.checked)
            }

            function ja(a, b, c, d, e) {
                for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
                    if (g = a[r], g || 0 === g)
                        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                        else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                    while (f--) i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes), i.textContent = "";
                    while (i.firstChild) i.removeChild(i.firstChild);
                    i = p.lastChild
                } else q.push(b.createTextNode(g));
                i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
                while (g = q[r++])
                    if (d && n.inArray(g, d) > -1) e && e.push(g);
                    else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                    f = 0;
                    while (g = i[f++]) _.test(g.type || "") && c.push(g)
                }
                return i = null, p
            }! function () {
                var b, c, e = d.createElement("div");
                for (b in {
                        submit: !0
                        , change: !0
                        , focusin: !0
                    }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
                e = null
            }();
            var ka = /^(?:input|select|textarea)$/i
                , la = /^key/
                , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
                , na = /^(?:focusinfocus|focusoutblur)$/
                , oa = /^([^.]*)(?:\.(.+)|)/;

            function pa() {
                return !0
            }

            function qa() {
                return !1
            }

            function ra() {
                try {
                    return d.activeElement
                } catch (a) {}
            }

            function sa(a, b, c, d, e, f) {
                var g, h;
                if ("object" == typeof b) {
                    "string" != typeof c && (d = d || c, c = void 0);
                    for (h in b) sa(a, h, c, d, b[h], f);
                    return a
                }
                if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
                else if (!e) return a;
                return 1 === f && (g = e, e = function (a) {
                    return n().off(a), g.apply(this, arguments)
                }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
                    n.event.add(this, b, e, d, c)
                })
            }
            n.event = {
                global: {}
                , add: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
                    if (r) {
                        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                            return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                            type: o
                            , origType: q
                            , data: d
                            , handler: c
                            , guid: c.guid
                            , selector: e
                            , needsContext: e && n.expr.match.needsContext.test(e)
                            , namespace: p.join(".")
                        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                        a = null
                    }
                }
                , remove: function (a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
                    if (r && (k = r.events)) {
                        b = (b || "").match(G) || [""], j = b.length;
                        while (j--)
                            if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                                l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                                while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                                i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                            } else
                                for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
                    }
                }
                , trigger: function (b, c, e, f) {
                    var g, h, i, j, l, m, o, p = [e || d]
                        , q = k.call(b, "type") ? b.type : b
                        , r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                    if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                        if (!f && !l.noBubble && !n.isWindow(e)) {
                            for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                            m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                        }
                        o = 0;
                        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                            m = e[h], m && (e[h] = null), n.event.triggered = q;
                            try {
                                e[q]()
                            } catch (s) {}
                            n.event.triggered = void 0, m && (e[h] = m)
                        }
                        return b.result
                    }
                }
                , dispatch: function (a) {
                    a = n.event.fix(a);
                    var b, c, d, f, g, h = []
                        , i = e.call(arguments)
                        , j = (n._data(this, "events") || {})[a.type] || []
                        , k = n.event.special[a.type] || {};
                    if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                        h = n.event.handlers.call(this, a, j), b = 0;
                        while ((f = h[b++]) && !a.isPropagationStopped()) {
                            a.currentTarget = f.elem, c = 0;
                            while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                        }
                        return k.postDispatch && k.postDispatch.call(this, a), a.result
                    }
                }
                , handlers: function (a, b) {
                    var c, d, e, f, g = []
                        , h = b.delegateCount
                        , i = a.target;
                    if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                        for (; i != this; i = i.parentNode || this)
                            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                                d.length && g.push({
                                    elem: i
                                    , handlers: d
                                })
                            }
                    return h < b.length && g.push({
                        elem: this
                        , handlers: b.slice(h)
                    }), g
                }
                , fix: function (a) {
                    if (a[n.expando]) return a;
                    var b, c, e, f = a.type
                        , g = a
                        , h = this.fixHooks[f];
                    h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                    while (b--) c = e[b], a[c] = g[c];
                    return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
                }
                , props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")
                , fixHooks: {}
                , keyHooks: {
                    props: "char charCode key keyCode".split(" ")
                    , filter: function (a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                    }
                }
                , mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")
                    , filter: function (a, b) {
                        var c, e, f, g = b.button
                            , h = b.fromElement;
                        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                    }
                }
                , special: {
                    load: {
                        noBubble: !0
                    }
                    , focus: {
                        trigger: function () {
                            if (this !== ra() && this.focus) try {
                                return this.focus(), !1
                            } catch (a) {}
                        }
                        , delegateType: "focusin"
                    }
                    , blur: {
                        trigger: function () {
                            return this === ra() && this.blur ? (this.blur(), !1) : void 0
                        }
                        , delegateType: "focusout"
                    }
                    , click: {
                        trigger: function () {
                            return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }
                        , _default: function (a) {
                            return n.nodeName(a.target, "a")
                        }
                    }
                    , beforeunload: {
                        postDispatch: function (a) {
                            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                        }
                    }
                }
                , simulate: function (a, b, c) {
                    var d = n.extend(new n.Event, c, {
                        type: a
                        , isSimulated: !0
                    });
                    n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
                }
            }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            } : function (a, b, c) {
                var d = "on" + b;
                a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
            }, n.Event = function (a, b) {
                return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
            }, n.Event.prototype = {
                constructor: n.Event
                , isDefaultPrevented: qa
                , isPropagationStopped: qa
                , isImmediatePropagationStopped: qa
                , preventDefault: function () {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                }
                , stopPropagation: function () {
                    var a = this.originalEvent;
                    this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                }
                , stopImmediatePropagation: function () {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
                }
            }, n.each({
                mouseenter: "mouseover"
                , mouseleave: "mouseout"
                , pointerenter: "pointerover"
                , pointerleave: "pointerout"
            }, function (a, b) {
                n.event.special[a] = {
                    delegateType: b
                    , bindType: b
                    , handle: function (a) {
                        var c, d = this
                            , e = a.relatedTarget
                            , f = a.handleObj;
                        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                    }
                }
            }), l.submit || (n.event.special.submit = {
                setup: function () {
                    return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                        var b = a.target
                            , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                            a._submitBubble = !0
                        }), n._data(c, "submit", !0))
                    })
                }
                , postDispatch: function (a) {
                    a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
                }
                , teardown: function () {
                    return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
                }
            }), l.change || (n.event.special.change = {
                setup: function () {
                    return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                        "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                    }), n.event.add(this, "click._change", function (a) {
                        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
                    })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                        var b = a.target;
                        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                            !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                        }), n._data(b, "change", !0))
                    })
                }
                , handle: function (a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
                }
                , teardown: function () {
                    return n.event.remove(this, "._change"), !ka.test(this.nodeName)
                }
            }), l.focusin || n.each({
                focus: "focusin"
                , blur: "focusout"
            }, function (a, b) {
                var c = function (a) {
                    n.event.simulate(b, a.target, n.event.fix(a))
                };
                n.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this
                            , e = n._data(d, b);
                        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
                    }
                    , teardown: function () {
                        var d = this.ownerDocument || this
                            , e = n._data(d, b) - 1;
                        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
                    }
                }
            }), n.fn.extend({
                on: function (a, b, c, d) {
                    return sa(this, a, b, c, d)
                }
                , one: function (a, b, c, d) {
                    return sa(this, a, b, c, d, 1)
                }
                , off: function (a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                    if ("object" == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
                        n.event.remove(this, a, c, b)
                    })
                }
                , trigger: function (a, b) {
                    return this.each(function () {
                        n.event.trigger(a, b, this)
                    })
                }
                , triggerHandler: function (a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0
                }
            });
            var ta = / jQuery\d+="(?:null|\d+)"/g
                , ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i")
                , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
                , wa = /<script|<style|<link/i
                , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
                , ya = /^true\/(.*)/
                , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
                , Aa = ca(d)
                , Ba = Aa.appendChild(d.createElement("div"));

            function Ca(a, b) {
                return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            function Da(a) {
                return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
            }

            function Ea(a) {
                var b = ya.exec(a.type);
                return b ? a.type = b[1] : a.removeAttribute("type"), a
            }

            function Fa(a, b) {
                if (1 === b.nodeType && n.hasData(a)) {
                    var c, d, e, f = n._data(a)
                        , g = n._data(b, f)
                        , h = f.events;
                    if (h) {
                        delete g.handle, g.events = {};
                        for (c in h)
                            for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
                    }
                    g.data && (g.data = n.extend({}, g.data))
                }
            }

            function Ga(a, b) {
                var c, d, e;
                if (1 === b.nodeType) {
                    if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                        e = n._data(b);
                        for (d in e.events) n.removeEvent(b, d, e.handle);
                        b.removeAttribute(n.expando)
                    }
                    "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
                }
            }

            function Ha(a, b, c, d) {
                b = f.apply([], b);
                var e, g, h, i, j, k, m = 0
                    , o = a.length
                    , p = o - 1
                    , q = b[0]
                    , r = n.isFunction(q);
                if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
                    var f = a.eq(e);
                    r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
                });
                if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
                    for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
                    if (h)
                        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
                    k = e = null
                }
                return a
            }

            function Ia(a, b, c) {
                for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
                return a
            }
            n.extend({
                htmlPrefilter: function (a) {
                    return a.replace(va, "<$1></$2>")
                }
                , clone: function (a, b, c) {
                    var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
                    if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
                    if (b)
                        if (c)
                            for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                        else Fa(a, f);
                    return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
                }
                , cleanData: function (a, b) {
                    for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                            if (g.events)
                                for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                            j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                        }
                }
            }), n.fn.extend({
                domManip: Ha
                , detach: function (a) {
                    return Ia(this, a, !0)
                }
                , remove: function (a) {
                    return Ia(this, a)
                }
                , text: function (a) {
                    return Y(this, function (a) {
                        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                    }, null, a, arguments.length)
                }
                , append: function () {
                    return Ha(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = Ca(this, a);
                            b.appendChild(a)
                        }
                    })
                }
                , prepend: function () {
                    return Ha(this, arguments, function (a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = Ca(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                }
                , before: function () {
                    return Ha(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                }
                , after: function () {
                    return Ha(this, arguments, function (a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                }
                , empty: function () {
                    for (var a, b = 0; null != (a = this[b]); b++) {
                        1 === a.nodeType && n.cleanData(ea(a, !1));
                        while (a.firstChild) a.removeChild(a.firstChild);
                        a.options && n.nodeName(a, "select") && (a.options.length = 0)
                    }
                    return this
                }
                , clone: function (a, b) {
                    return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                        return n.clone(this, a, b)
                    })
                }
                , html: function (a) {
                    return Y(this, function (a) {
                        var b = this[0] || {}
                            , c = 0
                            , d = this.length;
                        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = n.htmlPrefilter(a);
                            try {
                                for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                                b = 0
                            } catch (e) {}
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                }
                , replaceWith: function () {
                    var a = [];
                    return Ha(this, arguments, function (b) {
                        var c = this.parentNode;
                        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
                    }, a)
                }
            }), n.each({
                appendTo: "append"
                , prependTo: "prepend"
                , insertBefore: "before"
                , insertAfter: "after"
                , replaceAll: "replaceWith"
            }, function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
                    return this.pushStack(e)
                }
            });
            var Ja, Ka = {
                HTML: "block"
                , BODY: "block"
            };

            function La(a, b) {
                var c = n(b.createElement(a)).appendTo(b.body)
                    , d = n.css(c[0], "display");
                return c.detach(), d
            }

            function Ma(a) {
                var b = d
                    , c = Ka[a];
                return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
            }
            var Na = /^margin/
                , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i")
                , Pa = function (a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                }
                , Qa = d.documentElement;
            ! function () {
                var b, c, e, f, g, h, i = d.createElement("div")
                    , j = d.createElement("div");
                if (j.style) {
                    j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                        reliableHiddenOffsets: function () {
                            return null == b && k(), f
                        }
                        , boxSizingReliable: function () {
                            return null == b && k(), e
                        }
                        , pixelMarginRight: function () {
                            return null == b && k(), c
                        }
                        , pixelPosition: function () {
                            return null == b && k(), b
                        }
                        , reliableMarginRight: function () {
                            return null == b && k(), g
                        }
                        , reliableMarginLeft: function () {
                            return null == b && k(), h
                        }
                    });

                    function k() {
                        var k, l, m = d.documentElement;
                        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                            width: "4px"
                        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                            marginRight: "4px"
                        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
                    }
                }
            }();
            var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
            a.getComputedStyle ? (Ra = function (b) {
                var c = b.ownerDocument.defaultView;
                return c.opener || (c = a), c.getComputedStyle(b)
            }, Sa = function (a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
            }) : Qa.currentStyle && (Ra = function (a) {
                return a.currentStyle
            }, Sa = function (a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
            });

            function Ua(a, b) {
                return {
                    get: function () {
                        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                    }
                }
            }
            var Va = /alpha\([^)]*\)/i
                , Wa = /opacity\s*=\s*([^)]*)/i
                , Xa = /^(none|table(?!-c[ea]).+)/
                , Ya = new RegExp("^(" + T + ")(.*)$", "i")
                , Za = {
                    position: "absolute"
                    , visibility: "hidden"
                    , display: "block"
                }
                , $a = {
                    letterSpacing: "0"
                    , fontWeight: "400"
                }
                , _a = ["Webkit", "O", "Moz", "ms"]
                , ab = d.createElement("div").style;

            function bb(a) {
                if (a in ab) return a;
                var b = a.charAt(0).toUpperCase() + a.slice(1)
                    , c = _a.length;
                while (c--)
                    if (a = _a[c] + b, a in ab) return a
            }

            function cb(a, b) {
                for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
                for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                return a
            }

            function db(a, b, c) {
                var d = Ya.exec(b);
                return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
            }

            function eb(a, b, c, d, e) {
                for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
                return g
            }

            function fb(b, c, e) {
                var f = !0
                    , g = "width" === c ? b.offsetWidth : b.offsetHeight
                    , h = Ra(b)
                    , i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
                if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
                    if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
                    f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
                }
                return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
            }
            n.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var c = Sa(a, "opacity");
                                return "" === c ? "1" : c
                            }
                        }
                    }
                }
                , cssNumber: {
                    animationIterationCount: !0
                    , columnCount: !0
                    , fillOpacity: !0
                    , flexGrow: !0
                    , flexShrink: !0
                    , fontWeight: !0
                    , lineHeight: !0
                    , opacity: !0
                    , order: !0
                    , orphans: !0
                    , widows: !0
                    , zIndex: !0
                    , zoom: !0
                }
                , cssProps: {
                    "float": l.cssFloat ? "cssFloat" : "styleFloat"
                }
                , style: function (a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e, f, g, h = n.camelCase(b)
                            , i = a.style;
                        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                        if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                            i[b] = c
                        } catch (j) {}
                    }
                }
                , css: function (a, b, c, d) {
                    var e, f, g, h = n.camelCase(b);
                    return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
                }
            }), n.each(["height", "width"], function (a, b) {
                n.cssHooks[b] = {
                    get: function (a, c, d) {
                        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
                            return fb(a, b, d)
                        }) : fb(a, b, d) : void 0
                    }
                    , set: function (a, c, d) {
                        var e = d && Ra(a);
                        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                    }
                }
            }), l.opacity || (n.cssHooks.opacity = {
                get: function (a, b) {
                    return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
                }
                , set: function (a, b) {
                    var c = a.style
                        , d = a.currentStyle
                        , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                        , f = d && d.filter || c.filter || "";
                    c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
                }
            }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
                return b ? Pa(a, {
                    display: "inline-block"
                }, Sa, [a, "marginRight"]) : void 0
            }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
                return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                    marginLeft: 0
                }, function () {
                    return a.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }), n.each({
                margin: ""
                , padding: ""
                , border: "Width"
            }, function (a, b) {
                n.cssHooks[a + b] = {
                    expand: function (c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                }, Na.test(a) || (n.cssHooks[a + b].set = db)
            }), n.fn.extend({
                css: function (a, b) {
                    return Y(this, function (a, b, c) {
                        var d, e, f = {}
                            , g = 0;
                        if (n.isArray(b)) {
                            for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                    }, a, b, arguments.length > 1)
                }
                , show: function () {
                    return cb(this, !0)
                }
                , hide: function () {
                    return cb(this)
                }
                , toggle: function (a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                        W(this) ? n(this).show() : n(this).hide()
                    })
                }
            });

            function gb(a, b, c, d, e) {
                return new gb.prototype.init(a, b, c, d, e)
            }
            n.Tween = gb, gb.prototype = {
                constructor: gb
                , init: function (a, b, c, d, e, f) {
                    this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
                }
                , cur: function () {
                    var a = gb.propHooks[this.prop];
                    return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
                }
                , run: function (a) {
                    var b, c = gb.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
                }
            }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
                _default: {
                    get: function (a) {
                        var b;
                        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                    }
                    , set: function (a) {
                        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                    }
                }
            }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            }, n.easing = {
                linear: function (a) {
                    return a
                }
                , swing: function (a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }
                , _default: "swing"
            }, n.fx = gb.prototype.init, n.fx.step = {};
            var hb, ib, jb = /^(?:toggle|show|hide)$/
                , kb = /queueHooks$/;

            function lb() {
                return a.setTimeout(function () {
                    hb = void 0
                }), hb = n.now()
            }

            function mb(a, b) {
                var c, d = {
                        height: a
                    }
                    , e = 0;
                for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
                return b && (d.opacity = d.width = a), d
            }

            function nb(a, b, c) {
                for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                    if (d = e[f].call(c, b, a)) return d
            }

            function ob(a, b, c) {
                var d, e, f, g, h, i, j, k, m = this
                    , o = {}
                    , p = a.style
                    , q = a.nodeType && W(a)
                    , r = n._data(a, "fxshow");
                c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                    h.unqueued || i()
                }), h.unqueued++, m.always(function () {
                    m.always(function () {
                        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                    })
                })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
                    p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
                }));
                for (d in b)
                    if (e = b[d], jb.exec(e)) {
                        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                            if ("show" !== e || !r || void 0 === r[d]) continue;
                            q = !0
                        }
                        o[d] = r && r[d] || n.style(a, d)
                    } else j = void 0;
                if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
                else {
                    r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                        n(a).hide()
                    }), m.done(function () {
                        var b;
                        n._removeData(a, "fxshow");
                        for (b in o) n.style(a, b, o[b])
                    });
                    for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                }
            }

            function pb(a, b) {
                var c, d, e, f, g;
                for (c in a)
                    if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                        f = g.expand(f), delete a[d];
                        for (c in f) c in a || (a[c] = f[c], b[c] = e)
                    } else b[d] = e
            }

            function qb(a, b, c) {
                var d, e, f = 0
                    , g = qb.prefilters.length
                    , h = n.Deferred().always(function () {
                        delete i.elem
                    })
                    , i = function () {
                        if (e) return !1;
                        for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                    }
                    , j = h.promise({
                        elem: a
                        , props: n.extend({}, b)
                        , opts: n.extend(!0, {
                            specialEasing: {}
                            , easing: n.easing._default
                        }, c)
                        , originalProperties: b
                        , originalOptions: c
                        , startTime: hb || lb()
                        , duration: c.duration
                        , tweens: []
                        , createTween: function (b, c) {
                            var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                            return j.tweens.push(d), d
                        }
                        , stop: function (b) {
                            var c = 0
                                , d = b ? j.tweens.length : 0;
                            if (e) return this;
                            for (e = !0; d > c; c++) j.tweens[c].run(1);
                            return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                        }
                    })
                    , k = j.props;
                for (pb(k, j.opts.specialEasing); g > f; f++)
                    if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
                return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                    elem: a
                    , anim: j
                    , queue: j.opts.queue
                })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
            }
            n.Animation = n.extend(qb, {
                    tweeners: {
                        "*": [function (a, b) {
                            var c = this.createTween(a, b);
                            return X(c.elem, a, U.exec(b), c), c
                        }]
                    }
                    , tweener: function (a, b) {
                        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
                    }
                    , prefilters: [ob]
                    , prefilter: function (a, b) {
                        b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
                    }
                }), n.speed = function (a, b, c) {
                    var d = a && "object" == typeof a ? n.extend({}, a) : {
                        complete: c || !c && b || n.isFunction(a) && a
                        , duration: a
                        , easing: c && b || b && !n.isFunction(b) && b
                    };
                    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                    }, d
                }, n.fn.extend({
                    fadeTo: function (a, b, c, d) {
                        return this.filter(W).css("opacity", 0).show().end().animate({
                            opacity: b
                        }, a, c, d)
                    }
                    , animate: function (a, b, c, d) {
                        var e = n.isEmptyObject(a)
                            , f = n.speed(b, c, d)
                            , g = function () {
                                var b = qb(this, n.extend({}, a), f);
                                (e || n._data(this, "finish")) && b.stop(!0)
                            };
                        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                    }
                    , stop: function (a, b, c) {
                        var d = function (a) {
                            var b = a.stop;
                            delete a.stop, b(c)
                        };
                        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                            var b = !0
                                , e = null != a && a + "queueHooks"
                                , f = n.timers
                                , g = n._data(this);
                            if (e) g[e] && g[e].stop && d(g[e]);
                            else
                                for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                            for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                            (b || !c) && n.dequeue(this, a)
                        })
                    }
                    , finish: function (a) {
                        return a !== !1 && (a = a || "fx"), this.each(function () {
                            var b, c = n._data(this)
                                , d = c[a + "queue"]
                                , e = c[a + "queueHooks"]
                                , f = n.timers
                                , g = d ? d.length : 0;
                            for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                            delete c.finish
                        })
                    }
                }), n.each(["toggle", "show", "hide"], function (a, b) {
                    var c = n.fn[b];
                    n.fn[b] = function (a, d, e) {
                        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
                    }
                }), n.each({
                    slideDown: mb("show")
                    , slideUp: mb("hide")
                    , slideToggle: mb("toggle")
                    , fadeIn: {
                        opacity: "show"
                    }
                    , fadeOut: {
                        opacity: "hide"
                    }
                    , fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (a, b) {
                    n.fn[a] = function (a, c, d) {
                        return this.animate(b, a, c, d)
                    }
                }), n.timers = [], n.fx.tick = function () {
                    var a, b = n.timers
                        , c = 0;
                    for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                    b.length || n.fx.stop(), hb = void 0
                }, n.fx.timer = function (a) {
                    n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
                }, n.fx.interval = 13, n.fx.start = function () {
                    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
                }, n.fx.stop = function () {
                    a.clearInterval(ib), ib = null
                }, n.fx.speeds = {
                    slow: 600
                    , fast: 200
                    , _default: 400
                }, n.fn.delay = function (b, c) {
                    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                        var e = a.setTimeout(c, b);
                        d.stop = function () {
                            a.clearTimeout(e)
                        }
                    })
                }
                , function () {
                    var a, b = d.createElement("input")
                        , c = d.createElement("div")
                        , e = d.createElement("select")
                        , f = e.appendChild(d.createElement("option"));
                    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
                }();
            var rb = /\r/g;
            n.fn.extend({
                val: function (a) {
                    var b, c, d, e = this[0]; {
                        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                    }
                }
            }), n.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a))
                        }
                    }
                    , select: {
                        get: function (a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                    if (b = n(c).val(), f) return b;
                                    g.push(b)
                                }
                            return g
                        }
                        , set: function (a, b) {
                            var c, d, e = a.options
                                , f = n.makeArray(b)
                                , g = e.length;
                            while (g--)
                                if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                } else d.selected = !1;
                            return c || (a.selectedIndex = -1), e
                        }
                    }
                }
            }), n.each(["radio", "checkbox"], function () {
                n.valHooks[this] = {
                    set: function (a, b) {
                        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                    }
                }, l.checkOn || (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                })
            });
            var sb, tb, ub = n.expr.attrHandle
                , vb = /^(?:checked|selected)$/i
                , wb = l.getSetAttribute
                , xb = l.input;
            n.fn.extend({
                attr: function (a, b) {
                    return Y(this, n.attr, a, b, arguments.length > 1)
                }
                , removeAttr: function (a) {
                    return this.each(function () {
                        n.removeAttr(this, a)
                    })
                }
            }), n.extend({
                attr: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
                }
                , attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b
                            }
                        }
                    }
                }
                , removeAttr: function (a, b) {
                    var c, d, e = 0
                        , f = b && b.match(G);
                    if (f && 1 === a.nodeType)
                        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
                }
            }), tb = {
                set: function (a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
                }
            }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
                var c = ub[b] || n.find.attr;
                xb && wb || !vb.test(b) ? ub[b] = function (a, b, d) {
                    var e, f;
                    return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
                } : ub[b] = function (a, b, c) {
                    return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
                }
            }), xb && wb || (n.attrHooks.value = {
                set: function (a, b, c) {
                    return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c)
                }
            }), wb || (sb = {
                set: function (a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
                }
            }, ub.id = ub.name = ub.coords = function (a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
            }, n.valHooks.button = {
                get: function (a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0
                }
                , set: sb.set
            }, n.attrHooks.contenteditable = {
                set: function (a, b, c) {
                    sb.set(a, "" === b ? !1 : b, c)
                }
            }, n.each(["width", "height"], function (a, b) {
                n.attrHooks[b] = {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                    }
                }
            })), l.style || (n.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText || void 0
                }
                , set: function (a, b) {
                    return a.style.cssText = b + ""
                }
            });
            var yb = /^(?:input|select|textarea|button|object)$/i
                , zb = /^(?:a|area)$/i;
            n.fn.extend({
                prop: function (a, b) {
                    return Y(this, n.prop, a, b, arguments.length > 1)
                }
                , removeProp: function (a) {
                    return a = n.propFix[a] || a, this.each(function () {
                        try {
                            this[a] = void 0, delete this[a]
                        } catch (b) {}
                    })
                }
            }), n.extend({
                prop: function (a, b, c) {
                    var d, e, f = a.nodeType;
                    if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                }
                , propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = n.find.attr(a, "tabindex");
                            return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                        }
                    }
                }
                , propFix: {
                    "for": "htmlFor"
                    , "class": "className"
                }
            }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
                n.propHooks[b] = {
                    get: function (a) {
                        return a.getAttribute(b, 4)
                    }
                }
            }), l.optSelected || (n.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
                }
            }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                n.propFix[this.toLowerCase()] = this
            }), l.enctype || (n.propFix.enctype = "encoding");
            var Ab = /[\t\r\n\f]/g;

            function Bb(a) {
                return n.attr(a, "class") || ""
            }
            n.fn.extend({
                addClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (n.isFunction(a)) return this.each(function (b) {
                        n(this).addClass(a.call(this, b, Bb(this)))
                    });
                    if ("string" == typeof a && a) {
                        b = a.match(G) || [];
                        while (c = this[i++])
                            if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                                g = 0;
                                while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                                h = n.trim(d), e !== h && n.attr(c, "class", h)
                            }
                    }
                    return this
                }
                , removeClass: function (a) {
                    var b, c, d, e, f, g, h, i = 0;
                    if (n.isFunction(a)) return this.each(function (b) {
                        n(this).removeClass(a.call(this, b, Bb(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof a && a) {
                        b = a.match(G) || [];
                        while (c = this[i++])
                            if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                                g = 0;
                                while (f = b[g++])
                                    while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                                h = n.trim(d), e !== h && n.attr(c, "class", h)
                            }
                    }
                    return this
                }
                , toggleClass: function (a, b) {
                    var c = typeof a;
                    return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                        n(this).toggleClass(a.call(this, c, Bb(this), b), b)
                    }) : this.each(function () {
                        var b, d, e, f;
                        if ("string" === c) {
                            d = 0, e = n(this), f = a.match(G) || [];
                            while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        } else(void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                    })
                }
                , hasClass: function (a) {
                    var b, c, d = 0;
                    b = " " + a + " ";
                    while (c = this[d++])
                        if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
                    return !1
                }
            }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }), n.fn.extend({
                hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            });
            var Cb = a.location
                , Db = n.now()
                , Eb = /\?/
                , Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            n.parseJSON = function (b) {
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
                var c, d = null
                    , e = n.trim(b + "");
                return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
                    return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
                })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
            }, n.parseXML = function (b) {
                var c, d;
                if (!b || "string" != typeof b) return null;
                try {
                    a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
                } catch (e) {
                    c = void 0
                }
                return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
            };
            var Gb = /#.*$/
                , Hb = /([?&])_=[^&]*/
                , Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
                , Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                , Kb = /^(?:GET|HEAD)$/
                , Lb = /^\/\//
                , Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
                , Nb = {}
                , Ob = {}
                , Pb = "*/".concat("*")
                , Qb = Cb.href
                , Rb = Mb.exec(Qb.toLowerCase()) || [];

            function Sb(a) {
                return function (b, c) {
                    "string" != typeof b && (c = b, b = "*");
                    var d, e = 0
                        , f = b.toLowerCase().match(G) || [];
                    if (n.isFunction(c))
                        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }

            function Tb(a, b, c, d) {
                var e = {}
                    , f = a === Ob;

                function g(h) {
                    var i;
                    return e[h] = !0, n.each(a[h] || [], function (a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                    }), i
                }
                return g(b.dataTypes[0]) || !e["*"] && g("*")
            }

            function Ub(a, b) {
                var c, d, e = n.ajaxSettings.flatOptions || {};
                for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
                return c && n.extend(!0, a, c), a
            }

            function Vb(a, b, c) {
                var d, e, f, g, h = a.contents
                    , i = a.dataTypes;
                while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
                if (e)
                    for (g in h)
                        if (h[g] && h[g].test(e)) {
                            i.unshift(g);
                            break
                        }
                if (i[0] in c) f = i[0];
                else {
                    for (g in c) {
                        if (!i[0] || a.converters[g + " " + i[0]]) {
                            f = g;
                            break
                        }
                        d || (d = g)
                    }
                    f = f || d
                }
                return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
            }

            function Wb(a, b, c, d) {
                var e, f, g, h, i, j = {}
                    , k = a.dataTypes.slice();
                if (k[1])
                    for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                f = k.shift();
                while (f)
                    if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                        if ("*" === f) f = i;
                        else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror"
                                , error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
                return {
                    state: "success"
                    , data: b
                }
            }
            n.extend({
                active: 0
                , lastModified: {}
                , etag: {}
                , ajaxSettings: {
                    url: Qb
                    , type: "GET"
                    , isLocal: Jb.test(Rb[1])
                    , global: !0
                    , processData: !0
                    , async: !0
                    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
                    , accepts: {
                        "*": Pb
                        , text: "text/plain"
                        , html: "text/html"
                        , xml: "application/xml, text/xml"
                        , json: "application/json, text/javascript"
                    }
                    , contents: {
                        xml: /\bxml\b/
                        , html: /\bhtml/
                        , json: /\bjson\b/
                    }
                    , responseFields: {
                        xml: "responseXML"
                        , text: "responseText"
                        , json: "responseJSON"
                    }
                    , converters: {
                        "* text": String
                        , "text html": !0
                        , "text json": n.parseJSON
                        , "text xml": n.parseXML
                    }
                    , flatOptions: {
                        url: !0
                        , context: !0
                    }
                }
                , ajaxSetup: function (a, b) {
                    return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
                }
                , ajaxPrefilter: Sb(Nb)
                , ajaxTransport: Sb(Ob)
                , ajax: function (b, c) {
                    "object" == typeof b && (c = b, b = void 0), c = c || {};
                    var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c)
                        , m = l.context || l
                        , o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event
                        , p = n.Deferred()
                        , q = n.Callbacks("once memory")
                        , r = l.statusCode || {}
                        , s = {}
                        , t = {}
                        , u = 0
                        , v = "canceled"
                        , w = {
                            readyState: 0
                            , getResponseHeader: function (a) {
                                var b;
                                if (2 === u) {
                                    if (!k) {
                                        k = {};
                                        while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                                    }
                                    b = k[a.toLowerCase()]
                                }
                                return null == b ? null : b
                            }
                            , getAllResponseHeaders: function () {
                                return 2 === u ? g : null
                            }
                            , setRequestHeader: function (a, b) {
                                var c = a.toLowerCase();
                                return u || (a = t[c] = t[c] || a, s[a] = b), this
                            }
                            , overrideMimeType: function (a) {
                                return u || (l.mimeType = a), this
                            }
                            , statusCode: function (a) {
                                var b;
                                if (a)
                                    if (2 > u)
                                        for (b in a) r[b] = [r[b], a[b]];
                                    else w.always(a[w.status]);
                                return this
                            }
                            , abort: function (a) {
                                var b = a || v;
                                return j && j.abort(b), y(0, b), this
                            }
                        };
                    if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
                    i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
                    for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
                    if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
                    v = "abort";
                    for (e in {
                            success: 1
                            , error: 1
                            , complete: 1
                        }) w[e](l[e]);
                    if (j = Tb(Ob, l, c, w)) {
                        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                            w.abort("timeout")
                        }, l.timeout));
                        try {
                            u = 1, j.send(s, y)
                        } catch (x) {
                            if (!(2 > u)) throw x;
                            y(-1, x)
                        }
                    } else y(-1, "No Transport");

                    function y(b, c, d, e) {
                        var k, s, t, v, x, y = c;
                        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
                    }
                    return w
                }
                , getJSON: function (a, b, c) {
                    return n.get(a, b, c, "json")
                }
                , getScript: function (a, b) {
                    return n.get(a, void 0, b, "script")
                }
            }), n.each(["get", "post"], function (a, b) {
                n[b] = function (a, c, d, e) {
                    return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                        url: a
                        , type: b
                        , dataType: e
                        , data: c
                        , success: d
                    }, n.isPlainObject(a) && a))
                }
            }), n._evalUrl = function (a) {
                return n.ajax({
                    url: a
                    , type: "GET"
                    , dataType: "script"
                    , cache: !0
                    , async: !1
                    , global: !1
                    , "throws": !0
                })
            }, n.fn.extend({
                wrapAll: function (a) {
                    if (n.isFunction(a)) return this.each(function (b) {
                        n(this).wrapAll(a.call(this, b))
                    });
                    if (this[0]) {
                        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                            var a = this;
                            while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                            return a
                        }).append(this)
                    }
                    return this
                }
                , wrapInner: function (a) {
                    return n.isFunction(a) ? this.each(function (b) {
                        n(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = n(this)
                            , c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                }
                , wrap: function (a) {
                    var b = n.isFunction(a);
                    return this.each(function (c) {
                        n(this).wrapAll(b ? a.call(this, c) : a)
                    })
                }
                , unwrap: function () {
                    return this.parent().each(function () {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                    }).end()
                }
            });

            function Xb(a) {
                return a.style && a.style.display || n.css(a, "display")
            }

            function Yb(a) {
                while (a && 1 === a.nodeType) {
                    if ("none" === Xb(a) || "hidden" === a.type) return !0;
                    a = a.parentNode
                }
                return !1
            }
            n.expr.filters.hidden = function (a) {
                return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
            }, n.expr.filters.visible = function (a) {
                return !n.expr.filters.hidden(a)
            };
            var Zb = /%20/g
                , $b = /\[\]$/
                , _b = /\r?\n/g
                , ac = /^(?:submit|button|image|reset|file)$/i
                , bc = /^(?:input|select|textarea|keygen)/i;

            function cc(a, b, c, d) {
                var e;
                if (n.isArray(b)) n.each(b, function (b, e) {
                    c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
                });
                else if (c || "object" !== n.type(b)) d(a, b);
                else
                    for (e in b) cc(a + "[" + e + "]", b[e], c, d)
            }
            n.param = function (a, b) {
                var c, d = []
                    , e = function (a, b) {
                        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
                    e(this.name, this.value)
                });
                else
                    for (c in a) cc(c, a[c], b, e);
                return d.join("&").replace(Zb, "+")
            }, n.fn.extend({
                serialize: function () {
                    return n.param(this.serializeArray())
                }
                , serializeArray: function () {
                    return this.map(function () {
                        var a = n.prop(this, "elements");
                        return a ? n.makeArray(a) : this
                    }).filter(function () {
                        var a = this.type;
                        return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a))
                    }).map(function (a, b) {
                        var c = n(this).val();
                        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                            return {
                                name: b.name
                                , value: a.replace(_b, "\r\n")
                            }
                        }) : {
                            name: b.name
                            , value: c.replace(_b, "\r\n")
                        }
                    }).get()
                }
            }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
                return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
            } : gc;
            var dc = 0
                , ec = {}
                , fc = n.ajaxSettings.xhr();
            a.attachEvent && a.attachEvent("onunload", function () {
                for (var a in ec) ec[a](void 0, !0)
            }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function (b) {
                if (!b.crossDomain || l.cors) {
                    var c;
                    return {
                        send: function (d, e) {
                            var f, g = b.xhr()
                                , h = ++dc;
                            if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                                for (f in b.xhrFields) g[f] = b.xhrFields[f];
                            b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                            for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                            g.send(b.hasContent && b.data || null), c = function (a, d) {
                                var f, i, j;
                                if (c && (d || 4 === g.readyState))
                                    if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                                    else {
                                        j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                        try {
                                            i = g.statusText
                                        } catch (k) {
                                            i = ""
                                        }
                                        f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                    }
                                j && e(f, i, j, g.getAllResponseHeaders())
                            }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                        }
                        , abort: function () {
                            c && c(void 0, !0)
                        }
                    }
                }
            });

            function gc() {
                try {
                    return new a.XMLHttpRequest
                } catch (b) {}
            }

            function hc() {
                try {
                    return new a.ActiveXObject("Microsoft.XMLHTTP")
                } catch (b) {}
            }
            n.ajaxPrefilter(function (a) {
                a.crossDomain && (a.contents.script = !1)
            }), n.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                }
                , contents: {
                    script: /\b(?:java|ecma)script\b/
                }
                , converters: {
                    "text script": function (a) {
                        return n.globalEval(a), a
                    }
                }
            }), n.ajaxPrefilter("script", function (a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
            }), n.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, c = d.head || n("head")[0] || d.documentElement;
                    return {
                        send: function (e, f) {
                            b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                            }, c.insertBefore(b, c.firstChild)
                        }
                        , abort: function () {
                            b && b.onload(void 0, !0)
                        }
                    }
                }
            });
            var ic = []
                , jc = /(=)\?(?=&|$)|\?\?/;
            n.ajaxSetup({
                jsonp: "callback"
                , jsonpCallback: function () {
                    var a = ic.pop() || n.expando + "_" + Db++;
                    return this[a] = !0, a
                }
            }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                    return g || n.error(e + " was not called"), g[0]
                }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                    g = arguments
                }, d.always(function () {
                    void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
                }), "script") : void 0
            }), l.createHTMLDocument = function () {
                if (!d.implementation.createHTMLDocument) return !1;
                var a = d.implementation.createHTMLDocument("");
                return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
            }(), n.parseHTML = function (a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
                var e = x.exec(a)
                    , f = !c && [];
                return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
            };
            var kc = n.fn.load;
            n.fn.load = function (a, b, c) {
                if ("string" != typeof a && kc) return kc.apply(this, arguments);
                var d, e, f, g = this
                    , h = a.indexOf(" ");
                return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                    url: a
                    , type: e || "GET"
                    , dataType: "html"
                    , data: b
                }).done(function (a) {
                    f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
                }).always(c && function (a, b) {
                    g.each(function () {
                        c.apply(g, f || [a.responseText, b, a])
                    })
                }), this
            }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a)
                }
            }), n.expr.filters.animated = function (a) {
                return n.grep(n.timers, function (b) {
                    return a === b.elem
                }).length
            };

            function lc(a) {
                return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
            }
            n.offset = {
                setOffset: function (a, b, c) {
                    var d, e, f, g, h, i, j, k = n.css(a, "position")
                        , l = n(a)
                        , m = {};
                    "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
                }
            }, n.fn.extend({
                offset: function (a) {
                    if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                        n.offset.setOffset(this, a, b)
                    });
                    var b, c, d = {
                            top: 0
                            , left: 0
                        }
                        , e = this[0]
                        , f = e && e.ownerDocument;
                    if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0)
                        , left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                    }) : d
                }
                , position: function () {
                    if (this[0]) {
                        var a, b, c = {
                                top: 0
                                , left: 0
                            }
                            , d = this[0];
                        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                            top: b.top - c.top - n.css(d, "marginTop", !0)
                            , left: b.left - c.left - n.css(d, "marginLeft", !0)
                        }
                    }
                }
                , offsetParent: function () {
                    return this.map(function () {
                        var a = this.offsetParent;
                        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                        return a || Qa
                    })
                }
            }), n.each({
                scrollLeft: "pageXOffset"
                , scrollTop: "pageYOffset"
            }, function (a, b) {
                var c = /Y/.test(b);
                n.fn[a] = function (d) {
                    return Y(this, function (a, d, e) {
                        var f = lc(a);
                        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                    }, a, d, arguments.length, null)
                }
            }), n.each(["top", "left"], function (a, b) {
                n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
                    return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
                })
            }), n.each({
                Height: "height"
                , Width: "width"
            }, function (a, b) {
                n.each({
                    padding: "inner" + a
                    , content: b
                    , "": "outer" + a
                }, function (c, d) {
                    n.fn[d] = function (d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d)
                            , g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return Y(this, function (b, c, d) {
                            var e;
                            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null)
                    }
                })
            }), n.fn.extend({
                bind: function (a, b, c) {
                    return this.on(a, null, b, c)
                }
                , unbind: function (a, b) {
                    return this.off(a, null, b)
                }
                , delegate: function (a, b, c, d) {
                    return this.on(b, a, c, d)
                }
                , undelegate: function (a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            }), n.fn.size = function () {
                return this.length
            }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return n
            });
            var mc = a.jQuery
                , nc = a.$;
            return n.noConflict = function (b) {
                return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
            }, b || (a.jQuery = a.$ = n), n
        });
        /*=================================
              02jQueryMigrate.min.js
        ==================================*/

        // JavaScript Document
        /*! jQuery Migrate v1.3.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
        "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0)
            , function (a, b, c) {
                function d(c) {
                    var d = b.console;
                    f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
                }

                function e(b, c, e, f) {
                    if (Object.defineProperty) try {
                        return void Object.defineProperty(b, c, {
                            configurable: !0
                            , enumerable: !0
                            , get: function () {
                                return d(f), e
                            }
                            , set: function (a) {
                                d(f), e = a
                            }
                        })
                    } catch (g) {}
                    a._definePropertyBroken = !0, b[c] = e
                }
                a.migrateVersion = "1.3.0";
                var f = {};
                a.migrateWarnings = [], !a.migrateMute && b.console && b.console.log && b.console.log("JQMIGRATE: Logging is active"), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
                    f = {}, a.migrateWarnings.length = 0
                }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
                var g = a("<input/>", {
                        size: 1
                    }).attr("size") && a.attrFn
                    , h = a.attr
                    , i = a.attrHooks.value && a.attrHooks.value.get || function () {
                        return null
                    }
                    , j = a.attrHooks.value && a.attrHooks.value.set || function () {
                        return c
                    }
                    , k = /^(?:input|button)$/i
                    , l = /^[238]$/
                    , m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
                    , n = /^(?:checked|selected)$/i;
                e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
                    var j = e.toLowerCase()
                        , o = b && b.nodeType;
                    return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                        get: function (b, d) {
                            var e, f = a.prop(b, d);
                            return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                        }
                        , set: function (b, c, d) {
                            var e;
                            return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                        }
                    }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
                }, a.attrHooks.value = {
                    get: function (a, b) {
                        var c = (a.nodeName || "").toLowerCase();
                        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
                    }
                    , set: function (a, b) {
                        var c = (a.nodeName || "").toLowerCase();
                        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
                    }
                };
                var o, p, q = a.fn.init
                    , r = a.parseJSON
                    , s = /^\s*</
                    , t = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
                a.fn.init = function (b, e, f) {
                    var g, h;
                    return b && "string" == typeof b && !a.isPlainObject(e) && (g = t.exec(a.trim(b))) && g[0] && (s.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : ("#" === b && (d("jQuery( '#' ) is not a valid selector"), b = []), h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
                }, a.fn.init.prototype = a.fn, a.parseJSON = function (a) {
                    return a ? r.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
                }, a.uaMatch = function (a) {
                    a = a.toLowerCase();
                    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                    return {
                        browser: b[1] || ""
                        , version: b[2] || "0"
                    }
                }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
                    function b(a, c) {
                        return new b.fn.init(a, c)
                    }
                    a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
                        var f = a.fn.init.call(this, d, e, c);
                        return f instanceof b ? f : b(f)
                    }, b.fn.init.prototype = b.fn;
                    var c = b(document);
                    return d("jQuery.sub() is deprecated"), b
                }, a.fn.size = function () {
                    return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
                };
                var u = !1;
                a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
                    var d = a.cssHooks[c] && a.cssHooks[c].get;
                    d && (a.cssHooks[c].get = function () {
                        var a;
                        return u = !0, a = d.apply(this, arguments), u = !1, a
                    })
                }), a.swap = function (a, b, c, e) {
                    var f, g, h = {};
                    u || d("jQuery.swap() is undocumented and deprecated");
                    for (g in b) h[g] = a.style[g], a.style[g] = b[g];
                    f = c.apply(a, e || []);
                    for (g in b) a.style[g] = h[g];
                    return f
                }, a.ajaxSetup({
                    converters: {
                        "text json": a.parseJSON
                    }
                });
                var v = a.fn.data;
                a.fn.data = function (b) {
                    var e, f, g = this[0];
                    return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? v.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
                };
                var w = /\/(java|ecma)script/i;
                a.clean || (a.clean = function (b, c, e, f) {
                    c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
                    var g, h, i, j, k = [];
                    if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                        for (i = function (a) {
                                return !a.type || w.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                            }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
                    return k
                });
                var x = a.event.add
                    , y = a.event.remove
                    , z = a.event.trigger
                    , A = a.fn.toggle
                    , B = a.fn.live
                    , C = a.fn.die
                    , D = a.fn.load
                    , E = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
                    , F = new RegExp("\\b(?:" + E + ")\\b")
                    , G = /(?:^|\s)hover(\.\S+|)\b/
                    , H = function (b) {
                        return "string" != typeof b || a.event.special.hover ? b : (G.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(G, "mouseenter$1 mouseleave$1"))
                    };
                a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
                    a !== document && F.test(b) && d("AJAX events should be attached to document: " + b), x.call(this, a, H(b || ""), c, e, f)
                }, a.event.remove = function (a, b, c, d, e) {
                    y.call(this, a, H(b) || "", c, d, e)
                }, a.each(["load", "unload", "error"], function (b, c) {
                    a.fn[c] = function () {
                        var a = Array.prototype.slice.call(arguments, 0);
                        return d("jQuery.fn." + c + "() is deprecated"), "load" === c && "string" == typeof arguments[0] ? D.apply(this, arguments) : (a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
                    }
                }), a.fn.toggle = function (b, c) {
                    if (!a.isFunction(b) || !a.isFunction(c)) return A.apply(this, arguments);
                    d("jQuery.fn.toggle(handler, handler...) is deprecated");
                    var e = arguments
                        , f = b.guid || a.guid++
                        , g = 0
                        , h = function (c) {
                            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                        };
                    for (h.guid = f; g < e.length;) e[g++].guid = f;
                    return this.click(h)
                }, a.fn.live = function (b, c, e) {
                    return d("jQuery.fn.live() is deprecated"), B ? B.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
                }, a.fn.die = function (b, c) {
                    return d("jQuery.fn.die() is deprecated"), C ? C.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
                }, a.event.trigger = function (a, b, c, e) {
                    return c || F.test(a) || d("Global events are undocumented and deprecated"), z.call(this, a, b, c || document, e)
                }, a.each(E.split("|"), function (b, c) {
                    a.event.special[c] = {
                        setup: function () {
                            var b = this;
                            return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                                a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                            }), a._data(this, c, a.guid++)), !1
                        }
                        , teardown: function () {
                            return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                        }
                    }
                }), a.event.special.ready = {
                    setup: function () {
                        d("'ready' event is deprecated")
                    }
                };
                var I = a.fn.andSelf || a.fn.addBack
                    , J = a.fn.find;
                if (a.fn.andSelf = function () {
                        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), I.apply(this, arguments)
                    }, a.fn.find = function (a) {
                        var b = J.apply(this, arguments);
                        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
                    }, a.Callbacks) {
                    var K = a.Deferred
                        , L = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
                    a.Deferred = function (b) {
                        var c = K()
                            , e = c.promise();
                        return c.pipe = e.pipe = function () {
                            var b = arguments;
                            return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                                a.each(L, function (f, g) {
                                    var h = a.isFunction(b[f]) && b[f];
                                    c[g[1]](function () {
                                        var b = h && h.apply(this, arguments);
                                        b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                                    })
                                }), b = null
                            }).promise()
                        }, c.isResolved = function () {
                            return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                        }, c.isRejected = function () {
                            return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                        }, b && b.call(c, c), c
                    }
                }
            }(jQuery, window);
        /*=================================
              03jQueryBootstrap.js
        ==================================*/

        /*!
         * Bootstrap v3.3.6 (http://getbootstrap.com)
         * Copyright 2011-2015 Twitter, Inc.
         * Licensed under the MIT license
         */
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
            "use strict";
            var b = a.fn.jquery.split(" ")[0].split(".");
            if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
        }(jQuery), + function (a) {
            "use strict";

            function b() {
                var a = document.createElement("bootstrap")
                    , b = {
                        WebkitTransition: "webkitTransitionEnd"
                        , MozTransition: "transitionend"
                        , OTransition: "oTransitionEnd otransitionend"
                        , transition: "transitionend"
                    };
                for (var c in b)
                    if (void 0 !== a.style[c]) return {
                        end: b[c]
                    };
                return !1
            }
            a.fn.emulateTransitionEnd = function (b) {
                var c = !1
                    , d = this;
                a(this).one("bsTransitionEnd", function () {
                    c = !0
                });
                var e = function () {
                    c || a(d).trigger(a.support.transition.end)
                };
                return setTimeout(e, b), this
            }, a(function () {
                a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                    bindType: a.support.transition.end
                    , delegateType: a.support.transition.end
                    , handle: function (b) {
                        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var c = a(this)
                        , e = c.data("bs.alert");
                    e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
                })
            }
            var c = '[data-dismiss="alert"]'
                , d = function (b) {
                    a(b).on("click", c, this.close)
                };
            d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger("closed.bs.alert").remove()
                }
                var e = a(this)
                    , f = e.attr("data-target");
                f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
                var g = a(f);
                b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
            };
            var e = a.fn.alert;
            a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
                return a.fn.alert = e, this
            }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.button")
                        , f = "object" == typeof b && b;
                    e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
                })
            }
            var c = function (b, d) {
                this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
            };
            c.VERSION = "3.3.6", c.DEFAULTS = {
                loadingText: "loading..."
            }, c.prototype.setState = function (b) {
                var c = "disabled"
                    , d = this.$element
                    , e = d.is("input") ? "val" : "html"
                    , f = d.data();
                b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
                    d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
                }, this), 0)
            }, c.prototype.toggle = function () {
                var a = !0
                    , b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find("input");
                    "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
            };
            var d = a.fn.button;
            a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
                return a.fn.button = d, this
            }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                var d = a(c.target);
                d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.carousel")
                        , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
                        , g = "string" == typeof b ? b : f.slide;
                    e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
                })
            }
            var c = function (b, c) {
                this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
                interval: 5e3
                , pause: "hover"
                , wrap: !0
                , keyboard: !0
            }, c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                    }
                    a.preventDefault()
                }
            }, c.prototype.cycle = function (b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
            }, c.prototype.getItemIndex = function (a) {
                return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
            }, c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b)
                    , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
                if (d && !this.options.wrap) return b;
                var e = "prev" == a ? -1 : 1
                    , f = (c + e) % this.$items.length;
                return this.$items.eq(f)
            }, c.prototype.to = function (a) {
                var b = this
                    , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    b.to(a)
                }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
            }, c.prototype.pause = function (b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, c.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next")
            }, c.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev")
            }, c.prototype.slide = function (b, d) {
                var e = this.$element.find(".item.active")
                    , f = d || this.getItemForDirection(b, e)
                    , g = this.interval
                    , h = "next" == b ? "left" : "right"
                    , i = this;
                if (f.hasClass("active")) return this.sliding = !1;
                var j = f[0]
                    , k = a.Event("slide.bs.carousel", {
                        relatedTarget: j
                        , direction: h
                    });
                if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                    if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                        l && l.addClass("active")
                    }
                    var m = a.Event("slid.bs.carousel", {
                        relatedTarget: j
                        , direction: h
                    });
                    return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                            i.$element.trigger(m)
                        }, 0)
                    }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
                }
            };
            var d = a.fn.carousel;
            a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
                return a.fn.carousel = d, this
            };
            var e = function (c) {
                var d, e = a(this)
                    , f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
                if (f.hasClass("carousel")) {
                    var g = a.extend({}, f.data(), e.data())
                        , h = e.attr("data-slide-to");
                    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
                }
            };
            a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);
                    b.call(c, c.data())
                })
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
                return a(d)
            }

            function c(b) {
                return this.each(function () {
                    var c = a(this)
                        , e = c.data("bs.collapse")
                        , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                    !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
                })
            }
            var d = function (b, c) {
                this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
                toggle: !0
            }, d.prototype.dimension = function () {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height"
            }, d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");
                        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                            e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                            var g = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var h = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!a.support.transition) return h.call(this);
                            var i = a.camelCase(["scroll", g].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                        }
                    }
                }
            }, d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");
                    if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var e = function () {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                    }
                }
            }, d.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, d.prototype.getParent = function () {
                return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
                    var e = a(d);
                    this.addAriaAndCollapsedClass(b(e), e)
                }, this)).end()
            }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass("in");
                a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
            };
            var e = a.fn.collapse;
            a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
                return a.fn.collapse = e, this
            }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                var e = a(this);
                e.attr("data-target") || d.preventDefault();
                var f = b(e)
                    , g = f.data("bs.collapse")
                    , h = g ? "toggle" : e.data();
                c.call(f, h)
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                var c = b.attr("data-target");
                c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
                var d = c && a(c);
                return d && d.length ? d : b.parent()
            }

            function c(c) {
                c && 3 === c.which || (a(e).remove(), a(f).each(function () {
                    var d = a(this)
                        , e = b(d)
                        , f = {
                            relatedTarget: this
                        };
                    e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
                }))
            }

            function d(b) {
                return this.each(function () {
                    var c = a(this)
                        , d = c.data("bs.dropdown");
                    d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
                })
            }
            var e = ".dropdown-backdrop"
                , f = '[data-toggle="dropdown"]'
                , g = function (b) {
                    a(b).on("click.bs.dropdown", this.toggle)
                };
            g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var f = b(e)
                        , g = f.hasClass("open");
                    if (c(), !g) {
                        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                        var h = {
                            relatedTarget: this
                        };
                        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                    }
                    return !1
                }
            }, g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                        var e = b(d)
                            , g = e.hasClass("open");
                        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                        var h = " li:not(.disabled):visible a"
                            , i = e.find(".dropdown-menu" + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                        }
                    }
                }
            };
            var h = a.fn.dropdown;
            a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
                return a.fn.dropdown = h, this
            }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                a.stopPropagation()
            }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
        }(jQuery), + function (a) {
            "use strict";

            function b(b, d) {
                return this.each(function () {
                    var e = a(this)
                        , f = e.data("bs.modal")
                        , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                    f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
                })
            }
            var c = function (b, c) {
                this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
                backdrop: !0
                , keyboard: !0
                , show: !0
            }, c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a)
            }, c.prototype.show = function (b) {
                var d = this
                    , e = a.Event("show.bs.modal", {
                        relatedTarget: b
                    });
                this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function () {
                    var e = a.support.transition && d.$element.hasClass("fade");
                    d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                    var f = a.Event("shown.bs.modal", {
                        relatedTarget: b
                    });
                    e ? d.$dialog.one("bsTransitionEnd", function () {
                        d.$element.trigger("focus").trigger(f)
                    }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
                }))
            }, c.prototype.hide = function (b) {
                b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
            }, c.prototype.enforceFocus = function () {
                a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
                    this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
                }, this))
            }, c.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
                    27 == a.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }, c.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
            }, c.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(), this.backdrop(function () {
                    a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
                })
            }, c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, c.prototype.backdrop = function (b) {
                var d = this
                    , e = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                    f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var g = function () {
                        d.removeBackdrop(), b && b()
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
                } else b && b()
            }, c.prototype.handleUpdate = function () {
                this.adjustDialog()
            }, c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : ""
                    , paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
                })
            }, c.prototype.resetAdjustments = function () {
                this.$element.css({
                    paddingLeft: ""
                    , paddingRight: ""
                })
            }, c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
            }, c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
            }, c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad)
            }, c.prototype.measureScrollbar = function () {
                var a = document.createElement("div");
                a.className = "modal-scrollbar-measure", this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a), b
            };
            var d = a.fn.modal;
            a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
                return a.fn.modal = d, this
            }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                var d = a(this)
                    , e = d.attr("href")
                    , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
                    , g = f.data("bs.modal") ? "toggle" : a.extend({
                        remote: !/#/.test(e) && e
                    }, f.data(), d.data());
                d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
                    a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                        d.is(":visible") && d.trigger("focus")
                    })
                }), b.call(f, g, this)
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.tooltip")
                        , f = "object" == typeof b && b;
                    (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
                })
            }
            var c = function (a, b) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
                animation: !0
                , placement: "top"
                , selector: !1
                , template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                , trigger: "hover focus"
                , title: ""
                , delay: 0
                , html: !1
                , container: !1
                , viewport: {
                    selector: "body"
                    , padding: 0
                }
            }, c.prototype.init = function (b, c, d) {
                if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1
                        , hover: !1
                        , focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                    var g = e[f];
                    if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                    else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin"
                            , i = "hover" == g ? "mouseleave" : "focusout";
                        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual"
                    , selector: ""
                }) : this.fixTitle()
            }, c.prototype.getDefaults = function () {
                return c.DEFAULTS
            }, c.prototype.getOptions = function (b) {
                return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay
                    , hide: b.delay
                }), b
            }, c.prototype.getDelegateOptions = function () {
                var b = {}
                    , c = this.getDefaults();
                return this._options && a.each(this._options, function (a, d) {
                    c[a] != d && (b[a] = d)
                }), b
            }, c.prototype.enter = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show()
                }, c.options.delay.show)) : c.show())
            }, c.prototype.isInStateTrue = function () {
                for (var a in this.inState)
                    if (this.inState[a]) return !0;
                return !1
            }, c.prototype.leave = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide)) : c.hide())
            }, c.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (b.isDefaultPrevented() || !d) return;
                    var e = this
                        , f = this.tip()
                        , g = this.getUID(this.type);
                    this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                    var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
                        , i = /\s?auto?\s?/i
                        , j = i.test(h);
                    j && (h = h.replace(i, "") || "top"), f.detach().css({
                        top: 0
                        , left: 0
                        , display: "block"
                    }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition()
                        , l = f[0].offsetWidth
                        , m = f[0].offsetHeight;
                    if (j) {
                        var n = h
                            , o = this.getPosition(this.$viewport);
                        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function () {
                        var a = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                    };
                    a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
                }
            }, c.prototype.applyPlacement = function (b, c) {
                var d = this.tip()
                    , e = d[0].offsetWidth
                    , f = d[0].offsetHeight
                    , g = parseInt(d.css("margin-top"), 10)
                    , h = parseInt(d.css("margin-left"), 10);
                isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                    using: function (a) {
                        d.css({
                            top: Math.round(a.top)
                            , left: Math.round(a.left)
                        })
                    }
                }, b), 0), d.addClass("in");
                var i = d[0].offsetWidth
                    , j = d[0].offsetHeight;
                "top" == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? b.left += k.left : b.top += k.top;
                var l = /top|bottom/.test(c)
                    , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
                    , n = l ? "offsetWidth" : "offsetHeight";
                d.offset(b), this.replaceArrow(m, d[0][n], l)
            }, c.prototype.replaceArrow = function (a, b, c) {
                this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
            }, c.prototype.setContent = function () {
                var a = this.tip()
                    , b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
            }, c.prototype.hide = function (b) {
                function d() {
                    "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
                }
                var e = this
                    , f = a(this.$tip)
                    , g = a.Event("hide.bs." + this.type);
                return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
            }, c.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
            }, c.prototype.hasContent = function () {
                return this.getTitle()
            }, c.prototype.getPosition = function (b) {
                b = b || this.$element;
                var c = b[0]
                    , d = "BODY" == c.tagName
                    , e = c.getBoundingClientRect();
                null == e.width && (e = a.extend({}, e, {
                    width: e.right - e.left
                    , height: e.bottom - e.top
                }));
                var f = d ? {
                        top: 0
                        , left: 0
                    } : b.offset()
                    , g = {
                        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                    }
                    , h = d ? {
                        width: a(window).width()
                        , height: a(window).height()
                    } : null;
                return a.extend({}, e, g, h, f)
            }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a ? {
                    top: b.top + b.height
                    , left: b.left + b.width / 2 - c / 2
                } : "top" == a ? {
                    top: b.top - d
                    , left: b.left + b.width / 2 - c / 2
                } : "left" == a ? {
                    top: b.top + b.height / 2 - d / 2
                    , left: b.left - c
                } : {
                    top: b.top + b.height / 2 - d / 2
                    , left: b.left + b.width
                }
            }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = {
                    top: 0
                    , left: 0
                };
                if (!this.$viewport) return e;
                var f = this.options.viewport && this.options.viewport.padding || 0
                    , g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll
                        , i = b.top + f - g.scroll + d;
                    h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
                } else {
                    var j = b.left - f
                        , k = b.left + f + c;
                    j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
                }
                return e
            }, c.prototype.getTitle = function () {
                var a, b = this.$element
                    , c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
            }, c.prototype.getUID = function (a) {
                do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
                return a
            }, c.prototype.tip = function () {
                if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, c.prototype.enable = function () {
                this.enabled = !0
            }, c.prototype.disable = function () {
                this.enabled = !1
            }, c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, c.prototype.toggle = function (b) {
                var c = this;
                b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
            }, c.prototype.destroy = function () {
                var a = this;
                clearTimeout(this.timeout), this.hide(function () {
                    a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
                })
            };
            var d = a.fn.tooltip;
            a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
                return a.fn.tooltip = d, this
            }
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.popover")
                        , f = "object" == typeof b && b;
                    (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
                })
            }
            var c = function (a, b) {
                this.init("popover", a, b)
            };
            if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
            c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right"
                , trigger: "click"
                , content: ""
                , template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
                return c.DEFAULTS
            }, c.prototype.setContent = function () {
                var a = this.tip()
                    , b = this.getTitle()
                    , c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
            }, c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }, c.prototype.getContent = function () {
                var a = this.$element
                    , b = this.options;
                return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            };
            var d = a.fn.popover;
            a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
                return a.fn.popover = d, this
            }
        }(jQuery), + function (a) {
            "use strict";

            function b(c, d) {
                this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
            }

            function c(c) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.scrollspy")
                        , f = "object" == typeof c && c;
                    e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
                })
            }
            b.VERSION = "3.3.6", b.DEFAULTS = {
                offset: 10
            }, b.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, b.prototype.refresh = function () {
                var b = this
                    , c = "offset"
                    , d = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var b = a(this)
                        , e = b.data("target") || b.attr("href")
                        , f = /^#./.test(e) && a(e);
                    return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
                }).sort(function (a, b) {
                    return a[0] - b[0]
                }).each(function () {
                    b.offsets.push(this[0]), b.targets.push(this[1])
                })
            }, b.prototype.process = function () {
                var a, b = this.$scrollElement.scrollTop() + this.options.offset
                    , c = this.getScrollHeight()
                    , d = this.options.offset + c - this.$scrollElement.height()
                    , e = this.offsets
                    , f = this.targets
                    , g = this.activeTarget;
                if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0]) return this.activeTarget = null, this.clear();
                for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
            }, b.prototype.activate = function (b) {
                this.activeTarget = b, this.clear();
                var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
                    , d = a(c).parents("li").addClass("active");
                d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
            }, b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var d = a.fn.scrollspy;
            a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
                return a.fn.scrollspy = d, this
            }, a(window).on("load.bs.scrollspy.data-api", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    c.call(b, b.data())
                })
            })
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.tab");
                    e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
                })
            }
            var c = function (b) {
                this.element = a(b)
            };
            c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
                var b = this.element
                    , c = b.closest("ul:not(.dropdown-menu)")
                    , d = b.data("target");
                if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                    var e = c.find(".active:last a")
                        , f = a.Event("hide.bs.tab", {
                            relatedTarget: b[0]
                        })
                        , g = a.Event("show.bs.tab", {
                            relatedTarget: e[0]
                        });
                    if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        var h = a(d);
                        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                            e.trigger({
                                type: "hidden.bs.tab"
                                , relatedTarget: b[0]
                            }), b.trigger({
                                type: "shown.bs.tab"
                                , relatedTarget: e[0]
                            })
                        })
                    }
                }
            }, c.prototype.activate = function (b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
                }
                var g = d.find("> .active")
                    , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
                g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
            };
            var d = a.fn.tab;
            a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
                return a.fn.tab = d, this
            };
            var e = function (c) {
                c.preventDefault(), b.call(a(this), "show")
            };
            a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
        }(jQuery), + function (a) {
            "use strict";

            function b(b) {
                return this.each(function () {
                    var d = a(this)
                        , e = d.data("bs.affix")
                        , f = "object" == typeof b && b;
                    e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
                })
            }
            var c = function (b, d) {
                this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
            };
            c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
                offset: 0
                , target: window
            }, c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop()
                    , f = this.$element.offset()
                    , g = this.$target.height();
                if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
                if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
                var h = null == this.affixed
                    , i = h ? e : f.top
                    , j = h ? g : b;
                return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
            }, c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(c.RESET).addClass("affix");
                var a = this.$target.scrollTop()
                    , b = this.$element.offset();
                return this.pinnedOffset = b.top - a
            }, c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1)
            }, c.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var b = this.$element.height()
                        , d = this.options.offset
                        , e = d.top
                        , f = d.bottom
                        , g = Math.max(a(document).height(), a(document.body).height());
                    "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                    var h = this.getState(g, b, e, f);
                    if (this.affixed != h) {
                        null != this.unpin && this.$element.css("top", "");
                        var i = "affix" + (h ? "-" + h : "")
                            , j = a.Event(i + ".bs.affix");
                        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == h && this.$element.offset({
                        top: g - b - f
                    })
                }
            };
            var d = a.fn.affix;
            a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
                return a.fn.affix = d, this
            }, a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this)
                        , d = c.data();
                    d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
                })
            })
        }(jQuery);
        /*=================================
              04dropZone.min.js
        ==================================*/

        // JavaScript Document
        (function () {
            var a, b, c, d, e, f, g, h, i = [].slice
                , j = {}.hasOwnProperty
                , k = function (a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b) j.call(b, d) && (a[d] = b[d]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                };
            g = function () {}, b = function () {
                function a() {}
                return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function (a, b) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this
                }, a.prototype.emit = function () {
                    var a, b, c, d, e, f;
                    if (d = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, c = this._callbacks[d])
                        for (e = 0, f = c.length; f > e; e++) b = c[e], b.apply(this, a);
                    return this
                }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function (a, b) {
                    var c, d, e, f, g;
                    if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                    if (d = this._callbacks[a], !d) return this;
                    if (1 === arguments.length) return delete this._callbacks[a], this;
                    for (e = f = 0, g = d.length; g > f; e = ++f)
                        if (c = d[e], c === b) {
                            d.splice(e, 1);
                            break
                        }
                    return this
                }, a
            }(), a = function (a) {
                function c(a, b) {
                    var e, f, g;
                    if (this.element = a, this.version = c.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (this.element.dropzone) throw new Error("Dropzone already attached.");
                    if (c.instances.push(this), this.element.dropzone = this, e = null != (g = c.optionsForElement(this.element)) ? g : {}, this.options = d({}, this.defaultOptions, e, null != b ? b : {}), this.options.forceFallback || !c.isBrowserSupported()) return this.options.fallback.call(this);
                    if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
                    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? c.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : c.getElements(this.options.clickable, "clickable")), this.init()
                }
                var d, e;
                return k(c, a), c.prototype.Emitter = b, c.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], c.prototype.defaultOptions = {
                    url: null
                    , method: "post"
                    , withCredentials: !1
                    , parallelUploads: 2
                    , uploadMultiple: !1
                    , maxFilesize: 256
                    , paramName: "file"
                    , createImageThumbnails: !0
                    , maxThumbnailFilesize: 10
                    , thumbnailWidth: 120
                    , thumbnailHeight: 120
                    , filesizeBase: 1e3
                    , maxFiles: null
                    , params: {}
                    , clickable: !0
                    , ignoreHiddenFiles: !0
                    , acceptedFiles: null
                    , acceptedMimeTypes: null
                    , autoProcessQueue: !0
                    , autoQueue: !0
                    , addRemoveLinks: !1
                    , previewsContainer: null
                    , hiddenInputContainer: "body"
                    , capture: null
                    , dictDefaultMessage: "Drop files here to upload"
                    , dictFallbackMessage: "Your browser does not support drag'n'drop file uploads."
                    , dictFallbackText: "Please use the fallback form below to upload your files like in the olden days."
                    , dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB."
                    , dictInvalidFileType: "You can't upload files of this type."
                    , dictResponseError: "Server responded with {{statusCode}} code."
                    , dictCancelUpload: "Cancel upload"
                    , dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?"
                    , dictRemoveFile: "Remove file"
                    , dictRemoveFileConfirmation: null
                    , dictMaxFilesExceeded: "You can not upload any more files."
                    , accept: function (a, b) {
                        return b()
                    }
                    , init: function () {
                        return g
                    }
                    , forceFallback: !1
                    , fallback: function () {
                        var a, b, d, e, f, g;
                        for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], /(^| )dz-message($| )/.test(a.className) && (b = a, a.className = "dz-message");
                        return b || (b = c.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(b)), d = b.getElementsByTagName("span")[0], d && (null != d.textContent ? d.textContent = this.options.dictFallbackMessage : null != d.innerText && (d.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                    }
                    , resize: function (a) {
                        var b, c, d;
                        return b = {
                            srcX: 0
                            , srcY: 0
                            , srcWidth: a.width
                            , srcHeight: a.height
                        }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b
                    }
                    , drop: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    }
                    , dragstart: g
                    , dragend: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    }
                    , dragenter: function () {
                        return this.element.classList.add("dz-drag-hover")
                    }
                    , dragover: function () {
                        return this.element.classList.add("dz-drag-hover")
                    }
                    , dragleave: function () {
                        return this.element.classList.remove("dz-drag-hover")
                    }
                    , paste: g
                    , reset: function () {
                        return this.element.classList.remove("dz-started")
                    }
                    , addedfile: function (a) {
                        var b, d, e, f, g, h, i, j, k, l, m, n, o;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                            for (a.previewElement = c.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; i > f; f++) b = l[f], b.textContent = a.name;
                            for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) b = m[g], b.innerHTML = this.filesize(a.size);
                            for (this.options.addRemoveLinks && (a._removeLink = c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), d = function (b) {
                                    return function (d) {
                                        return d.preventDefault(), d.stopPropagation(), a.status === c.UPLOADING ? c.confirm(b.options.dictCancelUploadConfirmation, function () {
                                            return b.removeFile(a)
                                        }) : b.options.dictRemoveFileConfirmation ? c.confirm(b.options.dictRemoveFileConfirmation, function () {
                                            return b.removeFile(a)
                                        }) : b.removeFile(a)
                                    }
                                }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                            return o
                        }
                    }
                    , removedfile: function (a) {
                        var b;
                        return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass()
                    }
                    , thumbnail: function (a, b) {
                        var c, d, e, f;
                        if (a.previewElement) {
                            for (a.previewElement.classList.remove("dz-file-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), d = 0, e = f.length; e > d; d++) c = f[d], c.alt = a.name, c.src = b;
                            return setTimeout(function () {
                                return function () {
                                    return a.previewElement.classList.add("dz-image-preview")
                                }
                            }(this), 1)
                        }
                    }
                    , error: function (a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                            return g
                        }
                    }
                    , errormultiple: g
                    , processing: function (a) {
                        return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0
                    }
                    , processingmultiple: g
                    , uploadprogress: function (a, b) {
                        var c, d, e, f, g;
                        if (a.previewElement) {
                            for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push("PROGRESS" === c.nodeName ? c.value = b : c.style.width = "" + b + "%");
                            return g
                        }
                    }
                    , totaluploadprogress: g
                    , sending: g
                    , sendingmultiple: g
                    , success: function (a) {
                        return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0
                    }
                    , successmultiple: g
                    , canceled: function (a) {
                        return this.emit("error", a, "Upload canceled.")
                    }
                    , canceledmultiple: g
                    , complete: function (a) {
                        return a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), a.previewElement ? a.previewElement.classList.add("dz-complete") : void 0
                    }
                    , completemultiple: g
                    , maxfilesexceeded: g
                    , maxfilesreached: g
                    , queuecomplete: g
                    , addedfiles: g
                    , previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
                }, d = function () {
                    var a, b, c, d, e, f, g;
                    for (d = arguments[0], c = 2 <= arguments.length ? i.call(arguments, 1) : [], f = 0, g = c.length; g > f; f++) {
                        b = c[f];
                        for (a in b) e = b[a], d[a] = e
                    }
                    return d
                }, c.prototype.getAcceptedFiles = function () {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
                    return e
                }, c.prototype.getRejectedFiles = function () {
                    var a, b, c, d, e;
                    for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
                    return e
                }, c.prototype.getFilesWithStatus = function (a) {
                    var b, c, d, e, f;
                    for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
                    return f
                }, c.prototype.getQueuedFiles = function () {
                    return this.getFilesWithStatus(c.QUEUED)
                }, c.prototype.getUploadingFiles = function () {
                    return this.getFilesWithStatus(c.UPLOADING)
                }, c.prototype.getAddedFiles = function () {
                    return this.getFilesWithStatus(c.ADDED)
                }, c.prototype.getActiveFiles = function () {
                    var a, b, d, e, f;
                    for (e = this.files, f = [], b = 0, d = e.length; d > b; b++) a = e[b], (a.status === c.UPLOADING || a.status === c.QUEUED) && f.push(a);
                    return f
                }, c.prototype.init = function () {
                    var a, b, d, e, f, g, h;
                    for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (d = function (a) {
                            return function () {
                                return a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function () {
                                    var b, c, e, f;
                                    if (c = a.hiddenFileInput.files, c.length)
                                        for (e = 0, f = c.length; f > e; e++) b = c[e], a.addFile(b);
                                    return a.emit("addedfiles", c), d()
                                })
                            }
                        }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
                    return this.on("uploadprogress", function (a) {
                        return function () {
                            return a.updateTotalUploadProgress()
                        }
                    }(this)), this.on("removedfile", function (a) {
                        return function () {
                            return a.updateTotalUploadProgress()
                        }
                    }(this)), this.on("canceled", function (a) {
                        return function (b) {
                            return a.emit("complete", b)
                        }
                    }(this)), this.on("complete", function (a) {
                        return function () {
                            return 0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function () {
                                return a.emit("queuecomplete")
                            }, 0) : void 0
                        }
                    }(this)), b = function (a) {
                        return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1
                    }, this.listeners = [{
                        element: this.element
                        , events: {
                            dragstart: function (a) {
                                return function (b) {
                                    return a.emit("dragstart", b)
                                }
                            }(this)
                            , dragenter: function (a) {
                                return function (c) {
                                    return b(c), a.emit("dragenter", c)
                                }
                            }(this)
                            , dragover: function (a) {
                                return function (c) {
                                    var d;
                                    try {
                                        d = c.dataTransfer.effectAllowed
                                    } catch (e) {}
                                    return c.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", b(c), a.emit("dragover", c)
                                }
                            }(this)
                            , dragleave: function (a) {
                                return function (b) {
                                    return a.emit("dragleave", b)
                                }
                            }(this)
                            , drop: function (a) {
                                return function (c) {
                                    return b(c), a.drop(c)
                                }
                            }(this)
                            , dragend: function (a) {
                                return function (b) {
                                    return a.emit("dragend", b)
                                }
                            }(this)
                        }
                    }], this.clickableElements.forEach(function (a) {
                        return function (b) {
                            return a.listeners.push({
                                element: b
                                , events: {
                                    click: function (d) {
                                        return (b !== a.element || d.target === a.element || c.elementInside(d.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0
                                    }
                                }
                            })
                        }
                    }(this)), this.enable(), this.options.init.call(this)
                }, c.prototype.destroy = function () {
                    var a;
                    return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, c.instances.splice(c.instances.indexOf(this), 1)
                }, c.prototype.updateTotalUploadProgress = function () {
                    var a, b, c, d, e, f, g, h;
                    if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                        for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, c += b.upload.total;
                        e = 100 * d / c
                    } else e = 100;
                    return this.emit("totaluploadprogress", e, c, d)
                }, c.prototype._getParamName = function (a) {
                    return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "")
                }, c.prototype.getFallbackForm = function () {
                    var a, b, d, e;
                    return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', b = c.createElement(d), "FORM" !== this.element.tagName ? (e = c.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : b)
                }, c.prototype.getExistingFallback = function () {
                    var a, b, c, d, e, f;
                    for (b = function (a) {
                            var b, c, d;
                            for (c = 0, d = a.length; d > c; c++)
                                if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b
                        }, f = ["div", "form"], d = 0, e = f.length; e > d; d++)
                        if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a
                }, c.prototype.setupEventListeners = function () {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function () {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                        return e
                    }());
                    return g
                }, c.prototype.removeEventListeners = function () {
                    var a, b, c, d, e, f, g;
                    for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function () {
                        var d, e;
                        d = a.events, e = [];
                        for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                        return e
                    }());
                    return g
                }, c.prototype.disable = function () {
                    var a, b, c, d, e;
                    for (this.clickableElements.forEach(function (a) {
                            return a.classList.remove("dz-clickable")
                        }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(this.cancelUpload(a));
                    return e
                }, c.prototype.enable = function () {
                    return this.clickableElements.forEach(function (a) {
                        return a.classList.add("dz-clickable")
                    }), this.setupEventListeners()
                }, c.prototype.filesize = function (a) {
                    var b, c, d, e, f, g, h, i;
                    if (d = 0, e = "b", a > 0) {
                        for (g = ["TB", "GB", "MB", "KB", "b"], c = h = 0, i = g.length; i > h; c = ++h)
                            if (f = g[c], b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) {
                                d = a / Math.pow(this.options.filesizeBase, 4 - c), e = f;
                                break
                            }
                        d = Math.round(10 * d) / 10
                    }
                    return "<strong>" + d + "</strong> " + e
                }, c.prototype._updateMaxFilesReachedClass = function () {
                    return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                }, c.prototype.drop = function (a) {
                    var b, c;
                    a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, this.emit("addedfiles", b), b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
                }, c.prototype.paste = function (a) {
                    var b, c;
                    if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0
                }, c.prototype.handleFiles = function (a) {
                    var b, c, d, e;
                    for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
                    return e
                }, c.prototype._addFilesFromItems = function (a) {
                    var b, c, d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile ? null == c.kind || "file" === c.kind ? this.addFile(c.getAsFile()) : void 0 : void 0);
                    return f
                }, c.prototype._addFilesFromDirectory = function (a, b) {
                    var c, d;
                    return c = a.createReader(), d = function (a) {
                        return function (c) {
                            var d, e, f;
                            for (e = 0, f = c.length; f > e; e++) d = c[e], d.isFile ? d.file(function (c) {
                                return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, a.addFile(c))
                            }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name)
                        }
                    }(this), c.readEntries(d, function (a) {
                        return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0
                    })
                }, c.prototype.accept = function (a, b) {
                    return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : c.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType)
                }, c.prototype.addFile = function (a) {
                    return a.upload = {
                        progress: 0
                        , total: a.size
                        , bytesSent: 0
                    }, this.files.push(a), a.status = c.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function (b) {
                        return function (c) {
                            return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass()
                        }
                    }(this))
                }, c.prototype.enqueueFiles = function (a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
                    return null
                }, c.prototype.enqueueFile = function (a) {
                    if (a.status !== c.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                    return a.status = c.QUEUED, this.options.autoProcessQueue ? setTimeout(function (a) {
                        return function () {
                            return a.processQueue()
                        }
                    }(this), 0) : void 0
                }, c.prototype._thumbnailQueue = [], c.prototype._processingThumbnail = !1, c.prototype._enqueueThumbnail = function (a) {
                    return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), setTimeout(function (a) {
                        return function () {
                            return a._processThumbnailQueue()
                        }
                    }(this), 0)) : void 0
                }, c.prototype._processThumbnailQueue = function () {
                    return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (a) {
                        return function () {
                            return a._processingThumbnail = !1, a._processThumbnailQueue()
                        }
                    }(this)))
                }, c.prototype.removeFile = function (a) {
                    return a.status === c.UPLOADING && this.cancelUpload(a), this.files = h(this.files, a), this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0
                }, c.prototype.removeAllFiles = function (a) {
                    var b, d, e, f;
                    for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) b = f[d], (b.status !== c.UPLOADING || a) && this.removeFile(b);
                    return null
                }, c.prototype.createThumbnail = function (a, b) {
                    var c;
                    return c = new FileReader, c.onload = function (d) {
                        return function () {
                            return "image/svg+xml" === a.type ? (d.emit("thumbnail", a, c.result), void(null != b && b())) : d.createThumbnailFromUrl(a, c.result, b)
                        }
                    }(this), c.readAsDataURL(a)
                }, c.prototype.createThumbnailFromUrl = function (a, b, c, d) {
                    var e;
                    return e = document.createElement("img"), d && (e.crossOrigin = d), e.onload = function (b) {
                        return function () {
                            var d, g, h, i, j, k, l, m;
                            return a.width = e.width, a.height = e.height, h = b.options.resize.call(b, a), null == h.trgWidth && (h.trgWidth = h.optWidth), null == h.trgHeight && (h.trgHeight = h.optHeight), d = document.createElement("canvas"), g = d.getContext("2d"), d.width = h.trgWidth, d.height = h.trgHeight, f(g, e, null != (j = h.srcX) ? j : 0, null != (k = h.srcY) ? k : 0, h.srcWidth, h.srcHeight, null != (l = h.trgX) ? l : 0, null != (m = h.trgY) ? m : 0, h.trgWidth, h.trgHeight), i = d.toDataURL("image/png"), b.emit("thumbnail", a, i), null != c ? c() : void 0
                        }
                    }(this), null != c && (e.onerror = c), e.src = b
                }, c.prototype.processQueue = function () {
                    var a, b, c, d;
                    if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                        if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                        for (; b > a;) {
                            if (!d.length) return;
                            this.processFile(d.shift()), a++
                        }
                    }
                }, c.prototype.processFile = function (a) {
                    return this.processFiles([a])
                }, c.prototype.processFiles = function (a) {
                    var b, d, e;
                    for (d = 0, e = a.length; e > d; d++) b = a[d], b.processing = !0, b.status = c.UPLOADING, this.emit("processing", b);
                    return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a)
                }, c.prototype._getFilesWithXhr = function (a) {
                    var b, c;
                    return c = function () {
                        var c, d, e, f;
                        for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                        return f
                    }.call(this)
                }, c.prototype.cancelUpload = function (a) {
                    var b, d, e, f, g, h, i;
                    if (a.status === c.UPLOADING) {
                        for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) b = d[e], b.status = c.CANCELED;
                        for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) b = d[f], this.emit("canceled", b);
                        this.options.uploadMultiple && this.emit("canceledmultiple", d)
                    } else((i = a.status) === c.ADDED || i === c.QUEUED) && (a.status = c.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
                    return this.options.autoProcessQueue ? this.processQueue() : void 0
                }, e = function () {
                    var a, b;
                    return b = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], "function" == typeof b ? b.apply(this, a) : b
                }, c.prototype.uploadFile = function (a) {
                    return this.uploadFiles([a])
                }, c.prototype.uploadFiles = function (a) {
                    var b, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
                    for (w = new XMLHttpRequest, x = 0, B = a.length; B > x; x++) b = a[x], b.xhr = w;
                    p = e(this.options.method, a), u = e(this.options.url, a), w.open(p, u, !0), w.withCredentials = !!this.options.withCredentials, s = null, g = function (c) {
                        return function () {
                            var d, e, f;
                            for (f = [], d = 0, e = a.length; e > d; d++) b = a[d], f.push(c._errorProcessing(a, s || c.options.dictResponseError.replace("{{statusCode}}", w.status), w));
                            return f
                        }
                    }(this), t = function (c) {
                        return function (d) {
                            var e, f, g, h, i, j, k, l, m;
                            if (null != d)
                                for (f = 100 * d.loaded / d.total, g = 0, j = a.length; j > g; g++) b = a[g], b.upload = {
                                    progress: f
                                    , total: d.total
                                    , bytesSent: d.loaded
                                };
                            else {
                                for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) b = a[h], (100 !== b.upload.progress || b.upload.bytesSent !== b.upload.total) && (e = !1), b.upload.progress = f, b.upload.bytesSent = b.upload.total;
                                if (e) return
                            }
                            for (m = [], i = 0, l = a.length; l > i; i++) b = a[i], m.push(c.emit("uploadprogress", b, f, b.upload.bytesSent));
                            return m
                        }
                    }(this), w.onload = function (b) {
                        return function (d) {
                            var e;
                            if (a[0].status !== c.CANCELED && 4 === w.readyState) {
                                if (s = w.responseText, w.getResponseHeader("content-type") && ~w.getResponseHeader("content-type").indexOf("application/json")) try {
                                    s = JSON.parse(s)
                                } catch (f) {
                                    d = f, s = "Invalid JSON response from server."
                                }
                                return t(), 200 <= (e = w.status) && 300 > e ? b._finished(a, s, d) : g()
                            }
                        }
                    }(this), w.onerror = function () {
                        return function () {
                            return a[0].status !== c.CANCELED ? g() : void 0
                        }
                    }(this), r = null != (G = w.upload) ? G : w, r.onprogress = t, j = {
                        Accept: "application/json"
                        , "Cache-Control": "no-cache"
                        , "X-Requested-With": "XMLHttpRequest"
                    }, this.options.headers && d(j, this.options.headers);
                    for (h in j) i = j[h], i && w.setRequestHeader(h, i);
                    if (f = new FormData, this.options.params) {
                        H = this.options.params;
                        for (o in H) v = H[o], f.append(o, v)
                    }
                    for (y = 0, C = a.length; C > y; y++) b = a[y], this.emit("sending", b, w, f);
                    if (this.options.uploadMultiple && this.emit("sendingmultiple", a, w, f), "FORM" === this.element.tagName)
                        for (I = this.element.querySelectorAll("input, textarea, select, button"), z = 0, D = I.length; D > z; z++)
                            if (l = I[z], m = l.getAttribute("name"), n = l.getAttribute("type"), "SELECT" === l.tagName && l.hasAttribute("multiple"))
                                for (J = l.options, A = 0, E = J.length; E > A; A++) q = J[A], q.selected && f.append(m, q.value);
                            else(!n || "checkbox" !== (K = n.toLowerCase()) && "radio" !== K || l.checked) && f.append(m, l.value);
                    for (k = F = 0, L = a.length - 1; L >= 0 ? L >= F : F >= L; k = L >= 0 ? ++F : --F) f.append(this._getParamName(k), a[k], a[k].name);
                    return this.submitRequest(w, f, a)
                }, c.prototype.submitRequest = function (a, b) {
                    return a.send(b)
                }, c.prototype._finished = function (a, b, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.SUCCESS, this.emit("success", e, b, d), this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("successmultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
                }, c.prototype._errorProcessing = function (a, b, d) {
                    var e, f, g;
                    for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.ERROR, this.emit("error", e, b, d), this.emit("complete", e);
                    return this.options.uploadMultiple && (this.emit("errormultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
                }, c
            }(b), a.version = "4.2.0", a.options = {}, a.optionsForElement = function (b) {
                return b.getAttribute("id") ? a.options[c(b.getAttribute("id"))] : void 0
            }, a.instances = [], a.forElement = function (a) {
                if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return a.dropzone
            }, a.autoDiscover = !0, a.discover = function () {
                var b, c, d, e, f, g;
                for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], b = function (a) {
                        var b, c, e, f;
                        for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                        return f
                    }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(a.optionsForElement(c) !== !1 ? new a(c) : void 0);
                return g
            }, a.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], a.isBrowserSupported = function () {
                var b, c, d, e, f;
                if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a"))
                        for (f = a.blacklistedBrowsers, d = 0, e = f.length; e > d; d++) c = f[d], c.test(navigator.userAgent) && (b = !1);
                    else b = !1;
                else b = !1;
                return b
            }, h = function (a, b) {
                var c, d, e, f;
                for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
                return f
            }, c = function (a) {
                return a.replace(/[\-_](\w)/g, function (a) {
                    return a.charAt(1).toUpperCase()
                })
            }, a.createElement = function (a) {
                var b;
                return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0]
            }, a.elementInside = function (a, b) {
                if (a === b) return !0;
                for (; a = a.parentNode;)
                    if (a === b) return !0;
                return !1
            }, a.getElement = function (a, b) {
                var c;
                if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
                return c
            }, a.getElements = function (a, b) {
                var c, d, e, f, g, h, i, j;
                if (a instanceof Array) {
                    e = [];
                    try {
                        for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b))
                    } catch (k) {
                        c = k, e = null
                    }
                } else if ("string" == typeof a)
                    for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; i > g; g++) d = j[g], e.push(d);
                else null != a.nodeType && (e = [a]);
                if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
                return e
            }, a.confirm = function (a, b, c) {
                return window.confirm(a) ? b() : null != c ? c() : void 0
            }, a.isValidFile = function (a, b) {
                var c, d, e, f, g;
                if (!b) return !0;
                for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++)
                    if (e = b[f], e = e.trim(), "." === e.charAt(0)) {
                        if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0
                    } else if (/\/\*$/.test(e)) {
                    if (c === e.replace(/\/.*$/, "")) return !0
                } else if (d === e) return !0;
                return !1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (b) {
                return this.each(function () {
                    return new a(this, b)
                })
            }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", e = function (a) {
                var b, c, d, e, f, g, h, i, j, k;
                for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
                return j = i / g, 0 === j ? 1 : j
            }, f = function (a, b, c, d, f, g, h, i, j, k) {
                var l;
                return l = e(b), a.drawImage(b, c, d, f, g, h, i, j, k / l)
            }, d = function (a, b) {
                var c, d, e, f, g, h, i, j, k;
                if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function (c) {
                        return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0
                    }, g = function () {
                        var a;
                        try {
                            j.doScroll("left")
                        } catch (b) {
                            return a = b, void setTimeout(g, 50)
                        }
                        return f("poll")
                    }, "complete" !== d.readyState) {
                    if (d.createEventObject && j.doScroll) {
                        try {
                            k = !a.frameElement
                        } catch (l) {}
                        k && g()
                    }
                    return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
                }
            }, a._autoDiscoverFunction = function () {
                return a.autoDiscover ? a.discover() : void 0
            }, d(window, a._autoDiscoverFunction)
        }).call(this);
        /*=================================
              05lazyload.min.js
        ==================================*/

        // JavaScript Document
        /*! Lazy Load 1.9.1 - MIT license - Copyright 2010-2013 Mika Tuupola */
        ! function (a, b, c, d) {
            var e = a(b);
            a.fn.lazyload = function (f) {
                function g() {
                    var b = 0;
                    i.each(function () {
                        var c = a(this);
                        if (!j.skip_invisible || c.is(":visible"))
                            if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                            else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                            if (++b > j.failure_limit) return !1
                        } else c.trigger("appear"), b = 0
                    })
                }
                var h, i = this
                    , j = {
                        threshold: 0
                        , failure_limit: 0
                        , event: "scroll"
                        , effect: "show"
                        , container: b
                        , data_attribute: "original"
                        , skip_invisible: !0
                        , appear: null
                        , load: null
                        , placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                    };
                return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
                    return g()
                }), this.each(function () {
                    var b = this
                        , c = a(b);
                    b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
                        if (!this.loaded) {
                            if (j.appear) {
                                var d = i.length;
                                j.appear.call(b, d, j)
                            }
                            a("<img />").bind("load", function () {
                                var d = c.attr("data-" + j.data_attribute);
                                c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                                var e = a.grep(i, function (a) {
                                    return !a.loaded
                                });
                                if (i = a(e), j.load) {
                                    var f = i.length;
                                    j.load.call(b, f, j)
                                }
                            }).attr("src", c.attr("data-" + j.data_attribute))
                        }
                    }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
                        b.loaded || c.trigger("appear")
                    })
                }), e.bind("resize", function () {
                    g()
                }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
                    b.originalEvent && b.originalEvent.persisted && i.each(function () {
                        a(this).trigger("appear")
                    })
                }), a(c).ready(function () {
                    g()
                }), this
            }, a.belowthefold = function (c, f) {
                var g;
                return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
            }, a.rightoffold = function (c, f) {
                var g;
                return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
            }, a.abovethetop = function (c, f) {
                var g;
                return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
            }, a.leftofbegin = function (c, f) {
                var g;
                return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
            }, a.inviewport = function (b, c) {
                return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
            }, a.extend(a.expr[":"], {
                "below-the-fold": function (b) {
                    return a.belowthefold(b, {
                        threshold: 0
                    })
                }
                , "above-the-top": function (b) {
                    return !a.belowthefold(b, {
                        threshold: 0
                    })
                }
                , "right-of-screen": function (b) {
                    return a.rightoffold(b, {
                        threshold: 0
                    })
                }
                , "left-of-screen": function (b) {
                    return !a.rightoffold(b, {
                        threshold: 0
                    })
                }
                , "in-viewport": function (b) {
                    return a.inviewport(b, {
                        threshold: 0
                    })
                }
                , "above-the-fold": function (b) {
                    return !a.belowthefold(b, {
                        threshold: 0
                    })
                }
                , "right-of-fold": function (b) {
                    return a.rightoffold(b, {
                        threshold: 0
                    })
                }
                , "left-of-fold": function (b) {
                    return !a.rightoffold(b, {
                        threshold: 0
                    })
                }
            })
        }(jQuery, window, document);
        /*=================================
              06prettyPhoto.min.js
        ==================================*/

        // JavaScript Document
        ! function ($) {
            function getHashtag() {
                var url = location.href;
                return hashtag = -1 !== url.indexOf("#prettyPhoto") ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
            }

            function setHashtag() {
                "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
            }

            function clearHashtag() {
                -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
            }

            function getParam(name, url) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regexS = "[\\?&]" + name + "=([^&#]*)"
                    , regex = new RegExp(regexS)
                    , results = regex.exec(url);
                return null == results ? "" : results[1]
            }
            $.prettyPhoto = {
                version: "3.1.6"
            }, $.fn.prettyPhoto = function (pp_settings) {
                function _showContent() {
                    $(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (windowHeight / 2 - pp_dimensions.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                        height: pp_dimensions.contentHeight
                        , width: pp_dimensions.contentWidth
                    }, settings.animation_speed), $pp_pic_holder.animate({
                        top: projectedTop
                        , left: windowWidth / 2 - pp_dimensions.containerWidth / 2 < 0 ? 0 : windowWidth / 2 - pp_dimensions.containerWidth / 2
                        , width: pp_dimensions.containerWidth
                    }, settings.animation_speed, function () {
                        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(pp_dimensions.height).width(pp_dimensions.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == _getFileType(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (pp_dimensions.resized ? $("a.pp_expand,a.pp_contract").show() : $("a.pp_expand").hide()), !settings.autoplay_slideshow || pp_slideshow || pp_open || $.prettyPhoto.startSlideshow(), settings.changepicturecallback(), pp_open = !0
                    }), _insert_gallery(), pp_settings.ajaxcallback()
                }

                function _hideContent(callback) {
                    $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
                        $(".pp_loaderIcon").show(), callback()
                    })
                }

                function _checkPosition(setCount) {
                    setCount > 1 ? $(".pp_nav").show() : $(".pp_nav").hide()
                }

                function _fitToViewport(width, height) {
                    if (resized = !1, _getDimensions(width, height), imageWidth = width, imageHeight = height, (pp_containerWidth > windowWidth || pp_containerHeight > windowHeight) && doresize && settings.allow_resize && !percentBased) {
                        for (resized = !0, fitting = !1; !fitting;) pp_containerWidth > windowWidth ? (imageWidth = windowWidth - 200, imageHeight = height / width * imageWidth) : pp_containerHeight > windowHeight ? (imageHeight = windowHeight - 200, imageWidth = width / height * imageHeight) : fitting = !0, pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
                        (pp_containerWidth > windowWidth || pp_containerHeight > windowHeight) && _fitToViewport(pp_containerWidth, pp_containerHeight), _getDimensions(imageWidth, imageHeight)
                    }
                    return {
                        width: Math.floor(imageWidth)
                        , height: Math.floor(imageHeight)
                        , containerHeight: Math.floor(pp_containerHeight)
                        , containerWidth: Math.floor(pp_containerWidth) + 2 * settings.horizontal_padding
                        , contentHeight: Math.floor(pp_contentHeight)
                        , contentWidth: Math.floor(pp_contentWidth)
                        , resized: resized
                    }
                }

                function _getDimensions(width, height) {
                    width = parseFloat(width), height = parseFloat(height), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(width), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($("body")).css({
                        position: "absolute"
                        , top: -1e4
                    }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(width), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo($("body")).css({
                        position: "absolute"
                        , top: -1e4
                    }), titleHeight += $pp_title.height(), $pp_title.remove(), pp_contentHeight = height + detailsHeight, pp_contentWidth = width, pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), pp_containerWidth = width
                }

                function _getFileType(itemSrc) {
                    return itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i) ? "youtube" : itemSrc.match(/vimeo\.com/i) ? "vimeo" : itemSrc.match(/\b.mov\b/i) ? "quicktime" : itemSrc.match(/\b.swf\b/i) ? "flash" : itemSrc.match(/\biframe=true\b/i) ? "iframe" : itemSrc.match(/\bajax=true\b/i) ? "ajax" : itemSrc.match(/\bcustom=true\b/i) ? "custom" : "#" == itemSrc.substr(0, 1) ? "inline" : "image"
                }

                function _center_overlay() {
                    if (doresize && "undefined" != typeof $pp_pic_holder) {
                        if (scroll_pos = _get_scroll(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = windowHeight / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > windowHeight) return;
                        $pp_pic_holder.css({
                            top: projectedTop
                            , left: windowWidth / 2 + scroll_pos.scrollLeft - contentwidth / 2
                        })
                    }
                }

                function _get_scroll() {
                    return self.pageYOffset ? {
                        scrollTop: self.pageYOffset
                        , scrollLeft: self.pageXOffset
                    } : document.documentElement && document.documentElement.scrollTop ? {
                        scrollTop: document.documentElement.scrollTop
                        , scrollLeft: document.documentElement.scrollLeft
                    } : document.body ? {
                        scrollTop: document.body.scrollTop
                        , scrollLeft: document.body.scrollLeft
                    } : void 0
                }

                function _resize_overlay() {
                    windowHeight = $(window).height(), windowWidth = $(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height($(document).height()).width(windowWidth)
                }

                function _insert_gallery() {
                    isSet && settings.overlay_gallery && "image" == _getFileType(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((pp_dimensions.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, $.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
                }

                function _build_overlay(caller) {
                    if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), $("body").append(settings.markup), $pp_pic_holder = $(".pp_pic_holder"), $ppt = $(".ppt"), $pp_overlay = $("div.pp_overlay"), isSet && settings.overlay_gallery) {
                        currentGalleryPage = 0, toInject = "";
                        for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = $(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
                            return $.prettyPhoto.changeGalleryPage("next"), $.prettyPhoto.stopSlideshow(), !1
                        }), $pp_gallery.find(".pp_arrow_previous").click(function () {
                            return $.prettyPhoto.changeGalleryPage("previous"), $.prettyPhoto.stopSlideshow(), !1
                        }), $pp_pic_holder.find(".pp_content").hover(function () {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                        }, function () {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                        }), itemWidth = 57, $pp_gallery_li.each(function (i) {
                            $(this).find("a").click(function () {
                                return $.prettyPhoto.changePage(i), $.prettyPhoto.stopSlideshow(), !1
                            })
                        })
                    }
                    settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                        return $.prettyPhoto.startSlideshow(), !1
                    })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                        opacity: 0
                        , height: $(document).height()
                        , width: $(window).width()
                    }).bind("click", function () {
                        settings.modal || $.prettyPhoto.close()
                    }), $("a.pp_close").bind("click", function () {
                        return $.prettyPhoto.close(), !1
                    }), settings.allow_expand && $("a.pp_expand").bind("click", function (e) {
                        return $(this).hasClass("pp_expand") ? ($(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : ($(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), _hideContent(function () {
                            $.prettyPhoto.open()
                        }), !1
                    }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
                        return $.prettyPhoto.changePage("previous"), $.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
                        return $.prettyPhoto.changePage("next"), $.prettyPhoto.stopSlideshow(), !1
                    }), _center_overlay()
                }
                pp_settings = jQuery.extend({
                    hook: "rel"
                    , animation_speed: "fast"
                    , ajaxcallback: function () {}
                    , slideshow: 5e3
                    , autoplay_slideshow: !1
                    , opacity: .8
                    , show_title: !0
                    , allow_resize: !0
                    , allow_expand: !0
                    , default_width: 500
                    , default_height: 344
                    , counter_separator_label: "/"
                    , theme: "pp_default"
                    , horizontal_padding: 20
                    , hideflash: !1
                    , wmode: "opaque"
                    , autoplay: !0
                    , modal: !1
                    , deeplinking: !0
                    , overlay_gallery: !0
                    , overlay_gallery_max: 30
                    , keyboard_shortcuts: !0
                    , changepicturecallback: function () {}
                    , callback: function () {}
                    , ie6_fallback: !0
                    , markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>'
                    , gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>'
                    , image_markup: '<img id="fullResImage" src="{path}" />'
                    , flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>'
                    , quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>'
                    , iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>'
                    , inline_markup: '<div class="pp_inline">{content}</div>'
                    , custom_markup: ""
                    , social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
                }, pp_settings);
                var pp_dimensions, pp_open, pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth, pp_slideshow, matchedObjects = this
                    , percentBased = !1
                    , windowHeight = $(window).height()
                    , windowWidth = $(window).width();
                return doresize = !0, scroll_pos = _get_scroll(), $(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
                    _center_overlay(), _resize_overlay()
                }), pp_settings.keyboard_shortcuts && $(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (e) {
                    if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                    case 37:
                        $.prettyPhoto.changePage("previous"), e.preventDefault();
                        break;
                    case 39:
                        $.prettyPhoto.changePage("next"), e.preventDefault();
                        break;
                    case 27:
                        settings.modal || $.prettyPhoto.close(), e.preventDefault()
                    }
                }), $.prettyPhoto.initialize = function () {
                    return settings = pp_settings, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = $(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(matchedObjects, function (n, i) {
                        return -1 != $(n).attr(settings.hook).indexOf(theRel) ? $(n).attr("href") : void 0
                    }) : $.makeArray($(this).attr("href")), pp_titles = isSet ? jQuery.map(matchedObjects, function (n, i) {
                        return -1 != $(n).attr(settings.hook).indexOf(theRel) ? $(n).find("img").attr("alt") ? $(n).find("img").attr("alt") : "" : void 0
                    }) : $.makeArray($(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(matchedObjects, function (n, i) {
                        return -1 != $(n).attr(settings.hook).indexOf(theRel) ? $(n).attr("title") ? $(n).attr("title") : "" : void 0
                    }) : $.makeArray($(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray($(this).attr("href"), pp_images), rel_index = isSet ? set_position : $("a[" + settings.hook + "^='" + theRel + "']").index($(this)), _build_overlay(this), settings.allow_resize && $(window).bind("scroll.prettyphoto", function () {
                        _center_overlay()
                    }), $.prettyPhoto.open(), !1
                }, $.prettyPhoto.open = function (event) {
                    return "undefined" == typeof settings && (settings = pp_settings, pp_images = $.makeArray(arguments[0]), pp_titles = arguments[1] ? $.makeArray(arguments[1]) : $.makeArray(""), pp_descriptions = arguments[2] ? $.makeArray(arguments[2]) : $.makeArray(""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, _build_overlay(event.target)), settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), _checkPosition($(pp_images).size()), $(".pp_loaderIcon").show(), settings.deeplinking && setHashtag(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + $(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(getParam("width", pp_images[set_position])) ? getParam("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(getParam("height", pp_images[set_position])) ? getParam("height", pp_images[set_position]) : settings.default_height.toString(), percentBased = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat($(window).height() * parseFloat(movie_height) / 100 - 150), percentBased = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat($(window).width() * parseFloat(movie_width) / 100 - 150), percentBased = !0), $pp_pic_holder.fadeIn(function () {
                        switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, _getFileType(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image, nextImage = new Image, isSet && set_position < $(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
                                pp_dimensions = _fitToViewport(imgPreloader.width, imgPreloader.height), _showContent()
                            }, imgPreloader.onerror = function () {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist."), $.prettyPhoto.close()
                            }, imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), movie_id = getParam("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, getParam("rel", pp_images[set_position]) ? movie += "?rel=" + getParam("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), movie_id = pp_images[set_position];
                            var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/
                                , match = movie_id.match(regExp);
                            movie = "http://player.vimeo.com/video/" + match[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = pp_dimensions.width + "/embed/?moog_width=" + pp_dimensions.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, pp_dimensions.height).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), pp_dimensions.height += 15, pp_dimensions.contentHeight += 15, pp_dimensions.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, pp_dimensions.width).replace(/{height}/g, pp_dimensions.height).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = !1, pp_dimensions = _fitToViewport(movie_width, movie_height), doresize = !0, skipInjection = !0, $.get(pp_images[set_position], function (responseHTML) {
                                toInject = settings.inline_markup.replace(/{content}/g, responseHTML), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, _showContent()
                            });
                            break;
                        case "custom":
                            pp_dimensions = _fitToViewport(movie_width, movie_height), toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($("body")).show(), doresize = !1, pp_dimensions = _fitToViewport($(myClone).width(), $(myClone).height()), doresize = !0, $(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, $(pp_images[set_position]).html())
                        }
                        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, _showContent())
                    }), !1
                }, $.prettyPhoto.changePage = function (direction) {
                    currentGalleryPage = 0, "previous" == direction ? (set_position--, set_position < 0 && (set_position = $(pp_images).size() - 1)) : "next" == direction ? (set_position++, set_position > $(pp_images).size() - 1 && (set_position = 0)) : set_position = direction, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && $(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), _hideContent(function () {
                        $.prettyPhoto.open()
                    })
                }, $.prettyPhoto.changeGalleryPage = function (direction) {
                    "next" == direction ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == direction ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = direction, slide_speed = "next" == direction || "previous" == direction ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                        left: -slide_to
                    }, slide_speed)
                }, $.prettyPhoto.startSlideshow = function () {
                    "undefined" == typeof pp_slideshow ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
                        return $.prettyPhoto.stopSlideshow(), !1
                    }), pp_slideshow = setInterval($.prettyPhoto.startSlideshow, settings.slideshow)) : $.prettyPhoto.changePage("next")
                }, $.prettyPhoto.stopSlideshow = function () {
                    $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
                        return $.prettyPhoto.startSlideshow(), !1
                    }), clearInterval(pp_slideshow), pp_slideshow = void 0
                }, $.prettyPhoto.close = function () {
                    $pp_overlay.is(":animated") || ($.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), $("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
                        $(this).remove()
                    }), $pp_overlay.fadeOut(settings.animation_speed, function () {
                        settings.hideflash && $("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), $(this).remove(), $(window).unbind("scroll.prettyphoto"), clearHashtag(), settings.callback(), doresize = !0, pp_open = !1, delete settings
                    }))
                }, !pp_alreadyInitialized && getHashtag() && (pp_alreadyInitialized = !0, hashIndex = getHashtag(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
                    $("a[" + pp_settings.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
                }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", $.prettyPhoto.initialize)
            }
        }(jQuery);
        var pp_alreadyInitialized = !1;
        /*=================================
              07jQueryUI.min.js
        ==================================*/

        // JavaScript Document
        /*! jQuery UI - v1.11.4 - 2015-03-11
         * http://jqueryui.com
         * Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
         * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

        (function (e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
        })(function (e) {
            function t(t, s) {
                var n, a, o, r = t.nodeName.toLowerCase();
                return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
            }

            function i(t) {
                return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                    return "hidden" === e.css(this, "visibility")
                }).length
            }

            function s(e) {
                for (var t, i; e.length && e[0] !== document;) {
                    if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    e = e.parent()
                }
                return 0
            }

            function n() {
                this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done"
                    , prevText: "Prev"
                    , nextText: "Next"
                    , currentText: "Today"
                    , monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    , monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    , dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    , dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    , dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    , weekHeader: "Wk"
                    , dateFormat: "mm/dd/yy"
                    , firstDay: 0
                    , isRTL: !1
                    , showMonthAfterYear: !1
                    , yearSuffix: ""
                }, this._defaults = {
                    showOn: "focus"
                    , showAnim: "fadeIn"
                    , showOptions: {}
                    , defaultDate: null
                    , appendText: ""
                    , buttonText: "..."
                    , buttonImage: ""
                    , buttonImageOnly: !1
                    , hideIfNoPrevNext: !1
                    , navigationAsDateFormat: !1
                    , gotoCurrent: !1
                    , changeMonth: !1
                    , changeYear: !1
                    , yearRange: "c-10:c+10"
                    , showOtherMonths: !1
                    , selectOtherMonths: !1
                    , showWeek: !1
                    , calculateWeek: this.iso8601Week
                    , shortYearCutoff: "+10"
                    , minDate: null
                    , maxDate: null
                    , duration: "fast"
                    , beforeShowDay: null
                    , beforeShow: null
                    , onSelect: null
                    , onChangeMonthYear: null
                    , onClose: null
                    , numberOfMonths: 1
                    , showCurrentAtPos: 0
                    , stepMonths: 1
                    , stepBigMonths: 12
                    , altField: ""
                    , altFormat: ""
                    , constrainInput: !0
                    , showButtonPanel: !1
                    , autoSize: !1
                    , disabled: !1
                }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }

            function a(t) {
                var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return t.delegate(i, "mouseout", function () {
                    e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
                }).delegate(i, "mouseover", o)
            }

            function o() {
                e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
            }

            function r(t, i) {
                e.extend(t, i);
                for (var s in i) null == i[s] && (t[s] = i[s]);
                return t
            }

            function h(e) {
                return function () {
                    var t = this.element.val();
                    e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
                }
            }
            e.ui = e.ui || {}, e.extend(e.ui, {
                version: "1.11.4"
                , keyCode: {
                    BACKSPACE: 8
                    , COMMA: 188
                    , DELETE: 46
                    , DOWN: 40
                    , END: 35
                    , ENTER: 13
                    , ESCAPE: 27
                    , HOME: 36
                    , LEFT: 37
                    , PAGE_DOWN: 34
                    , PAGE_UP: 33
                    , PERIOD: 190
                    , RIGHT: 39
                    , SPACE: 32
                    , TAB: 9
                    , UP: 38
                }
            }), e.fn.extend({
                scrollParent: function (t) {
                    var i = this.css("position")
                        , s = "absolute" === i
                        , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                        , a = this.parents().filter(function () {
                            var t = e(this);
                            return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                        }).eq(0);
                    return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
                }
                , uniqueId: function () {
                    var e = 0;
                    return function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++e)
                        })
                    }
                }()
                , removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                    })
                }
            }), e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                    return function (i) {
                        return !!e.data(i, t)
                    }
                }) : function (t, i, s) {
                    return !!e.data(t, s[3])
                }
                , focusable: function (i) {
                    return t(i, !isNaN(e.attr(i, "tabindex")))
                }
                , tabbable: function (i) {
                    var s = e.attr(i, "tabindex")
                        , n = isNaN(s);
                    return (n || s >= 0) && t(i, !n)
                }
            }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
                function s(t, i, s, a) {
                    return e.each(n, function () {
                        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                    }), i
                }
                var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                    , a = i.toLowerCase()
                    , o = {
                        innerWidth: e.fn.innerWidth
                        , innerHeight: e.fn.innerHeight
                        , outerWidth: e.fn.outerWidth
                        , outerHeight: e.fn.outerHeight
                    };
                e.fn["inner" + i] = function (t) {
                    return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                        e(this).css(a, s(this, t) + "px")
                    })
                }, e.fn["outer" + i] = function (t, n) {
                    return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                        e(this).css(a, s(this, t, !0, n) + "px")
                    })
                }
            }), e.fn.addBack || (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
                return function (i) {
                    return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
                }
            }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
                focus: function (t) {
                    return function (i, s) {
                        return "number" == typeof i ? this.each(function () {
                            var t = this;
                            setTimeout(function () {
                                e(t).focus(), s && s.call(t)
                            }, i)
                        }) : t.apply(this, arguments)
                    }
                }(e.fn.focus)
                , disableSelection: function () {
                    var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.bind(e + ".ui-disableSelection", function (e) {
                            e.preventDefault()
                        })
                    }
                }()
                , enableSelection: function () {
                    return this.unbind(".ui-disableSelection")
                }
                , zIndex: function (t) {
                    if (void 0 !== t) return this.css("zIndex", t);
                    if (this.length)
                        for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                            if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                            n = n.parent()
                        }
                    return 0
                }
            }), e.ui.plugin = {
                add: function (t, i, s) {
                    var n, a = e.ui[t].prototype;
                    for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
                }
                , call: function (e, t, i, s) {
                    var n, a = e.plugins[t];
                    if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                        for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
                }
            };
            var l = 0
                , u = Array.prototype.slice;
            e.cleanData = function (t) {
                return function (i) {
                    var s, n, a;
                    for (a = 0; null != (n = i[a]); a++) try {
                        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
                    } catch (o) {}
                    t(i)
                }
            }(e.cleanData), e.widget = function (t, i, s) {
                var n, a, o, r, h = {}
                    , l = t.split(".")[0];
                return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
                    return !!e.data(t, n)
                }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
                    return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
                }, e.extend(o, a, {
                    version: s.version
                    , _proto: e.extend({}, s)
                    , _childConstructors: []
                }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
                    return e.isFunction(s) ? (h[t] = function () {
                        var e = function () {
                                return i.prototype[t].apply(this, arguments)
                            }
                            , n = function (e) {
                                return i.prototype[t].apply(this, e)
                            };
                        return function () {
                            var t, i = this._super
                                , a = this._superApply;
                            return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                        }
                    }(), void 0) : (h[t] = s, void 0)
                }), o.prototype = e.widget.extend(r, {
                    widgetEventPrefix: a ? r.widgetEventPrefix || t : t
                }, h, {
                    constructor: o
                    , namespace: l
                    , widgetName: t
                    , widgetFullName: n
                }), a ? (e.each(a._childConstructors, function (t, i) {
                    var s = i.prototype;
                    e.widget(s.namespace + "." + s.widgetName, o, i._proto)
                }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
            }, e.widget.extend = function (t) {
                for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
                    for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
                return t
            }, e.widget.bridge = function (t, i) {
                var s = i.prototype.widgetFullName || t;
                e.fn[t] = function (n) {
                    var a = "string" == typeof n
                        , o = u.call(arguments, 1)
                        , r = this;
                    return a ? this.each(function () {
                        var i, a = e.data(this, s);
                        return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
                    }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () {
                        var t = e.data(this, s);
                        t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
                    })), r
                }
            }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget"
                , widgetEventPrefix: ""
                , defaultElement: "<div>"
                , options: {
                    disabled: !1
                    , create: null
                }
                , _createWidget: function (t, i) {
                    i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function (e) {
                            e.target === i && this.destroy()
                        }
                    }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
                }
                , _getCreateOptions: e.noop
                , _getCreateEventData: e.noop
                , _create: e.noop
                , _init: e.noop
                , destroy: function () {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                }
                , _destroy: e.noop
                , widget: function () {
                    return this.element
                }
                , option: function (t, i) {
                    var s, n, a, o = t;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                            for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                            if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                            n[t] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            o[t] = i
                        }
                    return this._setOptions(o), this
                }
                , _setOptions: function (e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this
                }
                , _setOption: function (e, t) {
                    return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                }
                , enable: function () {
                    return this._setOptions({
                        disabled: !1
                    })
                }
                , disable: function () {
                    return this._setOptions({
                        disabled: !0
                    })
                }
                , _on: function (t, i, s) {
                    var n, a = this;
                    "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                        function r() {
                            return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                        }
                        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                        var h = s.match(/^([\w:-]*)\s*(.*)$/)
                            , l = h[1] + a.eventNamespace
                            , u = h[2];
                        u ? n.delegate(u, l, r) : i.bind(l, r)
                    })
                }
                , _off: function (t, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
                }
                , _delay: function (e, t) {
                    function i() {
                        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
                    }
                    var s = this;
                    return setTimeout(i, t || 0)
                }
                , _hoverable: function (t) {
                    this.hoverable = this.hoverable.add(t), this._on(t, {
                        mouseenter: function (t) {
                            e(t.currentTarget).addClass("ui-state-hover")
                        }
                        , mouseleave: function (t) {
                            e(t.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                }
                , _focusable: function (t) {
                    this.focusable = this.focusable.add(t), this._on(t, {
                        focusin: function (t) {
                            e(t.currentTarget).addClass("ui-state-focus")
                        }
                        , focusout: function (t) {
                            e(t.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                }
                , _trigger: function (t, i, s) {
                    var n, a, o = this.options[t];
                    if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                        for (n in a) n in i || (i[n] = a[n]);
                    return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
                }
            }, e.each({
                show: "fadeIn"
                , hide: "fadeOut"
            }, function (t, i) {
                e.Widget.prototype["_" + t] = function (s, n, a) {
                    "string" == typeof n && (n = {
                        effect: n
                    });
                    var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
                    n = n || {}, "number" == typeof n && (n = {
                        duration: n
                    }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                        e(this)[t](), a && a.call(s[0]), i()
                    })
                }
            }), e.widget;
            var d = !1;
            e(document).mouseup(function () {
                    d = !1
                }), e.widget("ui.mouse", {
                    version: "1.11.4"
                    , options: {
                        cancel: "input,textarea,button,select,option"
                        , distance: 1
                        , delay: 0
                    }
                    , _mouseInit: function () {
                        var t = this;
                        this.element.bind("mousedown." + this.widgetName, function (e) {
                            return t._mouseDown(e)
                        }).bind("click." + this.widgetName, function (i) {
                            return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                        }), this.started = !1
                    }
                    , _mouseDestroy: function () {
                        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                    }
                    , _mouseDown: function (t) {
                        if (!d) {
                            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                            var i = this
                                , s = 1 === t.which
                                , n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                            return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                                i.mouseDelayMet = !0
                            }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                                return i._mouseMove(e)
                            }, this._mouseUpDelegate = function (e) {
                                return i._mouseUp(e)
                            }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
                        }
                    }
                    , _mouseMove: function (t) {
                        if (this._mouseMoved) {
                            if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                            if (!t.which) return this._mouseUp(t)
                        }
                        return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                    }
                    , _mouseUp: function (t) {
                        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1
                    }
                    , _mouseDistanceMet: function (e) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                    }
                    , _mouseDelayMet: function () {
                        return this.mouseDelayMet
                    }
                    , _mouseStart: function () {}
                    , _mouseDrag: function () {}
                    , _mouseStop: function () {}
                    , _mouseCapture: function () {
                        return !0
                    }
                })
                , function () {
                    function t(e, t, i) {
                        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
                    }

                    function i(t, i) {
                        return parseInt(e.css(t, i), 10) || 0
                    }

                    function s(t) {
                        var i = t[0];
                        return 9 === i.nodeType ? {
                            width: t.width()
                            , height: t.height()
                            , offset: {
                                top: 0
                                , left: 0
                            }
                        } : e.isWindow(i) ? {
                            width: t.width()
                            , height: t.height()
                            , offset: {
                                top: t.scrollTop()
                                , left: t.scrollLeft()
                            }
                        } : i.preventDefault ? {
                            width: 0
                            , height: 0
                            , offset: {
                                top: i.pageY
                                , left: i.pageX
                            }
                        } : {
                            width: t.outerWidth()
                            , height: t.outerHeight()
                            , offset: t.offset()
                        }
                    }
                    e.ui = e.ui || {};
                    var n, a, o = Math.max
                        , r = Math.abs
                        , h = Math.round
                        , l = /left|center|right/
                        , u = /top|center|bottom/
                        , d = /[\+\-]\d+(\.[\d]+)?%?/
                        , c = /^\w+/
                        , p = /%$/
                        , f = e.fn.position;
                    e.position = {
                            scrollbarWidth: function () {
                                if (void 0 !== n) return n;
                                var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>")
                                    , a = s.children()[0];
                                return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                            }
                            , getScrollInfo: function (t) {
                                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                                    , s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                                    , n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth
                                    , a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                                return {
                                    width: a ? e.position.scrollbarWidth() : 0
                                    , height: n ? e.position.scrollbarWidth() : 0
                                }
                            }
                            , getWithinInfo: function (t) {
                                var i = e(t || window)
                                    , s = e.isWindow(i[0])
                                    , n = !!i[0] && 9 === i[0].nodeType;
                                return {
                                    element: i
                                    , isWindow: s
                                    , isDocument: n
                                    , offset: i.offset() || {
                                        left: 0
                                        , top: 0
                                    }
                                    , scrollLeft: i.scrollLeft()
                                    , scrollTop: i.scrollTop()
                                    , width: s || n ? i.width() : i.outerWidth()
                                    , height: s || n ? i.height() : i.outerHeight()
                                }
                            }
                        }, e.fn.position = function (n) {
                            if (!n || !n.of) return f.apply(this, arguments);
                            n = e.extend({}, n);
                            var p, m, g, v, y, b, _ = e(n.of)
                                , x = e.position.getWithinInfo(n.within)
                                , w = e.position.getScrollInfo(x)
                                , k = (n.collision || "flip").split(" ")
                                , T = {};
                            return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
                                var e, t, i = (n[this] || "").split(" ");
                                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                            }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                                var s, l, u = e(this)
                                    , d = u.outerWidth()
                                    , c = u.outerHeight()
                                    , f = i(this, "marginLeft")
                                    , b = i(this, "marginTop")
                                    , D = d + f + i(this, "marginRight") + w.width
                                    , S = c + b + i(this, "marginBottom") + w.height
                                    , M = e.extend({}, y)
                                    , C = t(T.my, u.outerWidth(), u.outerHeight());
                                "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = {
                                    marginLeft: f
                                    , marginTop: b
                                }, e.each(["left", "top"], function (t, i) {
                                    e.ui.position[k[t]] && e.ui.position[k[t]][i](M, {
                                        targetWidth: m
                                        , targetHeight: g
                                        , elemWidth: d
                                        , elemHeight: c
                                        , collisionPosition: s
                                        , collisionWidth: D
                                        , collisionHeight: S
                                        , offset: [p[0] + C[0], p[1] + C[1]]
                                        , my: n.my
                                        , at: n.at
                                        , within: x
                                        , elem: u
                                    })
                                }), n.using && (l = function (e) {
                                    var t = v.left - M.left
                                        , i = t + m - d
                                        , s = v.top - M.top
                                        , a = s + g - c
                                        , h = {
                                            target: {
                                                element: _
                                                , left: v.left
                                                , top: v.top
                                                , width: m
                                                , height: g
                                            }
                                            , element: {
                                                element: u
                                                , left: M.left
                                                , top: M.top
                                                , width: d
                                                , height: c
                                            }
                                            , horizontal: 0 > i ? "left" : t > 0 ? "right" : "center"
                                            , vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                        };
                                    d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                                }), u.offset(e.extend(M, {
                                    using: l
                                }))
                            })
                        }, e.ui.position = {
                            fit: {
                                left: function (e, t) {
                                    var i, s = t.within
                                        , n = s.isWindow ? s.scrollLeft : s.offset.left
                                        , a = s.width
                                        , r = e.left - t.collisionPosition.marginLeft
                                        , h = n - r
                                        , l = r + t.collisionWidth - a - n;
                                    t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                                }
                                , top: function (e, t) {
                                    var i, s = t.within
                                        , n = s.isWindow ? s.scrollTop : s.offset.top
                                        , a = t.within.height
                                        , r = e.top - t.collisionPosition.marginTop
                                        , h = n - r
                                        , l = r + t.collisionHeight - a - n;
                                    t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                                }
                            }
                            , flip: {
                                left: function (e, t) {
                                    var i, s, n = t.within
                                        , a = n.offset.left + n.scrollLeft
                                        , o = n.width
                                        , h = n.isWindow ? n.scrollLeft : n.offset.left
                                        , l = e.left - t.collisionPosition.marginLeft
                                        , u = l - h
                                        , d = l + t.collisionWidth - o - h
                                        , c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0
                                        , p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0
                                        , f = -2 * t.offset[0];
                                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                                }
                                , top: function (e, t) {
                                    var i, s, n = t.within
                                        , a = n.offset.top + n.scrollTop
                                        , o = n.height
                                        , h = n.isWindow ? n.scrollTop : n.offset.top
                                        , l = e.top - t.collisionPosition.marginTop
                                        , u = l - h
                                        , d = l + t.collisionHeight - o - h
                                        , c = "top" === t.my[1]
                                        , p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0
                                        , f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0
                                        , m = -2 * t.offset[1];
                                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                                }
                            }
                            , flipfit: {
                                left: function () {
                                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                                }
                                , top: function () {
                                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                                }
                            }
                        }
                        , function () {
                            var t, i, s, n, o, r = document.getElementsByTagName("body")[0]
                                , h = document.createElement("div");
                            t = document.createElement(r ? "div" : "body"), s = {
                                visibility: "hidden"
                                , width: 0
                                , height: 0
                                , border: 0
                                , margin: 0
                                , background: "none"
                            }, r && e.extend(s, {
                                position: "absolute"
                                , left: "-1000px"
                                , top: "-1000px"
                            });
                            for (o in s) t.style[o] = s[o];
                            t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                        }()
                }(), e.ui.position, e.widget("ui.accordion", {
                    version: "1.11.4"
                    , options: {
                        active: 0
                        , animate: {}
                        , collapsible: !1
                        , event: "click"
                        , header: "> li > :first-child,> :not(li):even"
                        , heightStyle: "auto"
                        , icons: {
                            activeHeader: "ui-icon-triangle-1-s"
                            , header: "ui-icon-triangle-1-e"
                        }
                        , activate: null
                        , beforeActivate: null
                    }
                    , hideProps: {
                        borderTopWidth: "hide"
                        , borderBottomWidth: "hide"
                        , paddingTop: "hide"
                        , paddingBottom: "hide"
                        , height: "hide"
                    }
                    , showProps: {
                        borderTopWidth: "show"
                        , borderBottomWidth: "show"
                        , paddingTop: "show"
                        , paddingBottom: "show"
                        , height: "show"
                    }
                    , _create: function () {
                        var t = this.options;
                        this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
                    }
                    , _getCreateEventData: function () {
                        return {
                            header: this.active
                            , panel: this.active.length ? this.active.next() : e()
                        }
                    }
                    , _createIcons: function () {
                        var t = this.options.icons;
                        t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
                    }
                    , _destroyIcons: function () {
                        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                    }
                    , _destroy: function () {
                        var e;
                        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
                    }
                    , _setOption: function (e, t) {
                        return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
                    }
                    , _keydown: function (t) {
                        if (!t.altKey && !t.ctrlKey) {
                            var i = e.ui.keyCode
                                , s = this.headers.length
                                , n = this.headers.index(t.target)
                                , a = !1;
                            switch (t.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                a = this.headers[(n + 1) % s];
                                break;
                            case i.LEFT:
                            case i.UP:
                                a = this.headers[(n - 1 + s) % s];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(t);
                                break;
                            case i.HOME:
                                a = this.headers[0];
                                break;
                            case i.END:
                                a = this.headers[s - 1]
                            }
                            a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
                        }
                    }
                    , _panelKeyDown: function (t) {
                        t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
                    }
                    , refresh: function () {
                        var t = this.options;
                        this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                    }
                    , _processPanels: function () {
                        var e = this.headers
                            , t = this.panels;
                        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
                    }
                    , _refresh: function () {
                        var t, i = this.options
                            , s = i.heightStyle
                            , n = this.element.parent();
                        this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
                            var t = e(this)
                                , i = t.uniqueId().attr("id")
                                , s = t.next()
                                , n = s.uniqueId().attr("id");
                            t.attr("aria-controls", n), s.attr("aria-labelledby", i)
                        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                            "aria-selected": "false"
                            , "aria-expanded": "false"
                            , tabIndex: -1
                        }).next().attr({
                            "aria-hidden": "true"
                        }).hide(), this.active.length ? this.active.attr({
                            "aria-selected": "true"
                            , "aria-expanded": "true"
                            , tabIndex: 0
                        }).next().attr({
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
                            var i = e(this)
                                , s = i.css("position");
                            "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
                        }), this.headers.each(function () {
                            t -= e(this).outerHeight(!0)
                        }), this.headers.next().each(function () {
                            e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                        }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
                            t = Math.max(t, e(this).css("height", "").height())
                        }).height(t))
                    }
                    , _activate: function (t) {
                        var i = this._findActive(t)[0];
                        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                            target: i
                            , currentTarget: i
                            , preventDefault: e.noop
                        }))
                    }
                    , _findActive: function (t) {
                        return "number" == typeof t ? this.headers.eq(t) : e()
                    }
                    , _setupEvents: function (t) {
                        var i = {
                            keydown: "_keydown"
                        };
                        t && e.each(t.split(" "), function (e, t) {
                            i[t] = "_eventHandler"
                        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }), this._hoverable(this.headers), this._focusable(this.headers)
                    }
                    , _eventHandler: function (t) {
                        var i = this.options
                            , s = this.active
                            , n = e(t.currentTarget)
                            , a = n[0] === s[0]
                            , o = a && i.collapsible
                            , r = o ? e() : n.next()
                            , h = s.next()
                            , l = {
                                oldHeader: s
                                , oldPanel: h
                                , newHeader: o ? e() : n
                                , newPanel: r
                            };
                        t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
                    }
                    , _toggle: function (t) {
                        var i = t.newPanel
                            , s = this.prevShow.length ? this.prevShow : t.oldPanel;
                        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
                            "aria-hidden": "true"
                        }), s.prev().attr({
                            "aria-selected": "false"
                            , "aria-expanded": "false"
                        }), i.length && s.length ? s.prev().attr({
                            tabIndex: -1
                            , "aria-expanded": "false"
                        }) : i.length && this.headers.filter(function () {
                            return 0 === parseInt(e(this).attr("tabIndex"), 10)
                        }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                            "aria-selected": "true"
                            , "aria-expanded": "true"
                            , tabIndex: 0
                        })
                    }
                    , _animate: function (e, t, i) {
                        var s, n, a, o = this
                            , r = 0
                            , h = e.css("box-sizing")
                            , l = e.length && (!t.length || e.index() < t.index())
                            , u = this.options.animate || {}
                            , d = l && u.down || u
                            , c = function () {
                                o._toggleComplete(i)
                            };
                        return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, {
                            duration: a
                            , easing: n
                            , step: function (e, t) {
                                t.now = Math.round(e)
                            }
                        }), e.hide().animate(this.showProps, {
                            duration: a
                            , easing: n
                            , complete: c
                            , step: function (e, i) {
                                i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0)
                            }
                        }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c)
                    }
                    , _toggleComplete: function (e) {
                        var t = e.oldPanel;
                        t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
                    }
                }), e.widget("ui.menu", {
                    version: "1.11.4"
                    , defaultElement: "<ul>"
                    , delay: 300
                    , options: {
                        icons: {
                            submenu: "ui-icon-carat-1-e"
                        }
                        , items: "> *"
                        , menus: "ul"
                        , position: {
                            my: "left-1 top"
                            , at: "right top"
                        }
                        , role: "menu"
                        , blur: null
                        , focus: null
                        , select: null
                    }
                    , _create: function () {
                        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                            role: this.options.role
                            , tabIndex: 0
                        }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                            "mousedown .ui-menu-item": function (e) {
                                e.preventDefault()
                            }
                            , "click .ui-menu-item": function (t) {
                                var i = e(t.target);
                                !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            }
                            , "mouseenter .ui-menu-item": function (t) {
                                if (!this.previousFilter) {
                                    var i = e(t.currentTarget);
                                    i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                                }
                            }
                            , mouseleave: "collapseAll"
                            , "mouseleave .ui-menu": "collapseAll"
                            , focus: function (e, t) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                t || this.focus(e, i)
                            }
                            , blur: function (t) {
                                this._delay(function () {
                                    e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                                })
                            }
                            , keydown: "_keydown"
                        }), this.refresh(), this._on(this.document, {
                            click: function (e) {
                                this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                            }
                        })
                    }
                    , _destroy: function () {
                        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                            var t = e(this);
                            t.data("ui-menu-submenu-carat") && t.remove()
                        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                    }
                    , _keydown: function (t) {
                        var i, s, n, a, o = !0;
                        switch (t.keyCode) {
                        case e.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case e.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case e.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case e.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case e.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case e.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case e.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case e.ui.keyCode.ENTER:
                        case e.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case e.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                        }
                        o && t.preventDefault()
                    }
                    , _activate: function (e) {
                        this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
                    }
                    , refresh: function () {
                        var t, i, s = this
                            , n = this.options.icons.submenu
                            , a = this.element.find(this.options.menus);
                        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                            role: this.options.role
                            , "aria-hidden": "true"
                            , "aria-expanded": "false"
                        }).each(function () {
                            var t = e(this)
                                , i = t.parent()
                                , s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                            i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
                        }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                            var t = e(this);
                            s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                        }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                            tabIndex: -1
                            , role: this._itemRole()
                        }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
                    }
                    , _itemRole: function () {
                        return {
                            menu: "menuitem"
                            , listbox: "option"
                        }[this.options.role]
                    }
                    , _setOption: function (e, t) {
                        "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
                    }
                    , focus: function (e, t) {
                        var i, s;
                        this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                            this._close()
                        }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                            item: t
                        })
                    }
                    , _scrollIntoView: function (t) {
                        var i, s, n, a, o, r;
                        this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
                    }
                    , blur: function (e, t) {
                        t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                            item: this.active
                        }))
                    }
                    , _startOpening: function (e) {
                        clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                            this._close(), this._open(e)
                        }, this.delay))
                    }
                    , _open: function (t) {
                        var i = e.extend({
                            of: this.active
                        }, this.options.position);
                        clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                    }
                    , collapseAll: function (t, i) {
                        clearTimeout(this.timer), this.timer = this._delay(function () {
                            var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                            s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
                        }, this.delay)
                    }
                    , _close: function (e) {
                        e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                    }
                    , _closeOnDocumentClick: function (t) {
                        return !e(t.target).closest(".ui-menu").length
                    }
                    , _isDivider: function (e) {
                        return !/[^\-\u2014\u2013\s]/.test(e.text())
                    }
                    , collapse: function (e) {
                        var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                        t && t.length && (this._close(), this.focus(e, t))
                    }
                    , expand: function (e) {
                        var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                        t && t.length && (this._open(t.parent()), this._delay(function () {
                            this.focus(e, t)
                        }))
                    }
                    , next: function (e) {
                        this._move("next", "first", e)
                    }
                    , previous: function (e) {
                        this._move("prev", "last", e)
                    }
                    , isFirstItem: function () {
                        return this.active && !this.active.prevAll(".ui-menu-item").length
                    }
                    , isLastItem: function () {
                        return this.active && !this.active.nextAll(".ui-menu-item").length
                    }
                    , _move: function (e, t, i) {
                        var s;
                        this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
                    }
                    , nextPage: function (t) {
                        var i, s, n;
                        return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                            return i = e(this), 0 > i.offset().top - s - n
                        }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
                    }
                    , previousPage: function (t) {
                        var i, s, n;
                        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                            return i = e(this), i.offset().top - s + n > 0
                        }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
                    }
                    , _hasScroll: function () {
                        return this.element.outerHeight() < this.element.prop("scrollHeight")
                    }
                    , select: function (t) {
                        this.active = this.active || e(t.target).closest(".ui-menu-item");
                        var i = {
                            item: this.active
                        };
                        this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
                    }
                    , _filterMenuItems: function (t) {
                        var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                            , s = RegExp("^" + i, "i");
                        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                            return s.test(e.trim(e(this).text()))
                        })
                    }
                }), e.widget("ui.autocomplete", {
                    version: "1.11.4"
                    , defaultElement: "<input>"
                    , options: {
                        appendTo: null
                        , autoFocus: !1
                        , delay: 300
                        , minLength: 1
                        , position: {
                            my: "left top"
                            , at: "left bottom"
                            , collision: "none"
                        }
                        , source: null
                        , change: null
                        , close: null
                        , focus: null
                        , open: null
                        , response: null
                        , search: null
                        , select: null
                    }
                    , requestIndex: 0
                    , pending: 0
                    , _create: function () {
                        var t, i, s, n = this.element[0].nodeName.toLowerCase()
                            , a = "textarea" === n
                            , o = "input" === n;
                        this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                            keydown: function (n) {
                                if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                                t = !1, s = !1, i = !1;
                                var a = e.ui.keyCode;
                                switch (n.keyCode) {
                                case a.PAGE_UP:
                                    t = !0, this._move("previousPage", n);
                                    break;
                                case a.PAGE_DOWN:
                                    t = !0, this._move("nextPage", n);
                                    break;
                                case a.UP:
                                    t = !0, this._keyEvent("previous", n);
                                    break;
                                case a.DOWN:
                                    t = !0, this._keyEvent("next", n);
                                    break;
                                case a.ENTER:
                                    this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                    break;
                                case a.TAB:
                                    this.menu.active && this.menu.select(n);
                                    break;
                                case a.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                    break;
                                default:
                                    i = !0, this._searchTimeout(n)
                                }
                            }
                            , keypress: function (s) {
                                if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                                if (!i) {
                                    var n = e.ui.keyCode;
                                    switch (s.keyCode) {
                                    case n.PAGE_UP:
                                        this._move("previousPage", s);
                                        break;
                                    case n.PAGE_DOWN:
                                        this._move("nextPage", s);
                                        break;
                                    case n.UP:
                                        this._keyEvent("previous", s);
                                        break;
                                    case n.DOWN:
                                        this._keyEvent("next", s)
                                    }
                                }
                            }
                            , input: function (e) {
                                return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                            }
                            , focus: function () {
                                this.selectedItem = null, this.previous = this._value()
                            }
                            , blur: function (e) {
                                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                            }
                        }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                            role: null
                        }).hide().menu("instance"), this._on(this.menu.element, {
                            mousedown: function (t) {
                                t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                                    delete this.cancelBlur
                                });
                                var i = this.menu.element[0];
                                e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                                    var t = this;
                                    this.document.one("mousedown", function (s) {
                                        s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                                    })
                                })
                            }
                            , menufocus: function (t, i) {
                                var s, n;
                                return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                                    e(t.target).trigger(t.originalEvent)
                                }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                                    item: n
                                }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
                            }
                            , menuselect: function (e, t) {
                                var i = t.item.data("ui-autocomplete-item")
                                    , s = this.previous;
                                this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                                    this.previous = s, this.selectedItem = i
                                })), !1 !== this._trigger("select", e, {
                                    item: i
                                }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                            }
                        }), this.liveRegion = e("<span>", {
                            role: "status"
                            , "aria-live": "assertive"
                            , "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    }
                    , _destroy: function () {
                        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                    }
                    , _setOption: function (e, t) {
                        this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
                    }
                    , _appendTo: function () {
                        var t = this.options.appendTo;
                        return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
                    }
                    , _initSource: function () {
                        var t, i, s = this;
                        e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                            s(e.ui.autocomplete.filter(t, i.term))
                        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
                            s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                                url: i
                                , data: t
                                , dataType: "json"
                                , success: function (e) {
                                    n(e)
                                }
                                , error: function () {
                                    n([])
                                }
                            })
                        }) : this.source = this.options.source
                    }
                    , _searchTimeout: function (e) {
                        clearTimeout(this.searching), this.searching = this._delay(function () {
                            var t = this.term === this._value()
                                , i = this.menu.element.is(":visible")
                                , s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                            (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
                        }, this.options.delay)
                    }
                    , search: function (e, t) {
                        return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
                    }
                    , _search: function (e) {
                        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                            term: e
                        }, this._response())
                    }
                    , _response: function () {
                        var t = ++this.requestIndex;
                        return e.proxy(function (e) {
                            t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                        }, this)
                    }
                    , __response: function (e) {
                        e && (e = this._normalize(e)), this._trigger("response", null, {
                            content: e
                        }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
                    }
                    , close: function (e) {
                        this.cancelSearch = !0, this._close(e)
                    }
                    , _close: function (e) {
                        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
                    }
                    , _change: function (e) {
                        this.previous !== this._value() && this._trigger("change", e, {
                            item: this.selectedItem
                        })
                    }
                    , _normalize: function (t) {
                        return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                            return "string" == typeof t ? {
                                label: t
                                , value: t
                            } : e.extend({}, t, {
                                label: t.label || t.value
                                , value: t.value || t.label
                            })
                        })
                    }
                    , _suggest: function (t) {
                        var i = this.menu.element.empty();
                        this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                            of: this.element
                        }, this.options.position)), this.options.autoFocus && this.menu.next()
                    }
                    , _resizeMenu: function () {
                        var e = this.menu.element;
                        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
                    }
                    , _renderMenu: function (t, i) {
                        var s = this;
                        e.each(i, function (e, i) {
                            s._renderItemData(t, i)
                        })
                    }
                    , _renderItemData: function (e, t) {
                        return this._renderItem(e, t).data("ui-autocomplete-item", t)
                    }
                    , _renderItem: function (t, i) {
                        return e("<li>").text(i.label).appendTo(t)
                    }
                    , _move: function (e, t) {
                        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
                    }
                    , widget: function () {
                        return this.menu.element
                    }
                    , _value: function () {
                        return this.valueMethod.apply(this.element, arguments)
                    }
                    , _keyEvent: function (e, t) {
                        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
                    }
                }), e.extend(e.ui.autocomplete, {
                    escapeRegex: function (e) {
                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    }
                    , filter: function (t, i) {
                        var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                        return e.grep(t, function (e) {
                            return s.test(e.label || e.value || e)
                        })
                    }
                }), e.widget("ui.autocomplete", e.ui.autocomplete, {
                    options: {
                        messages: {
                            noResults: "No search results."
                            , results: function (e) {
                                return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                            }
                        }
                    }
                    , __response: function (t) {
                        var i;
                        this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
                    }
                }), e.ui.autocomplete;
            var c, p = "ui-button ui-widget ui-state-default ui-corner-all"
                , f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"
                , m = function () {
                    var t = e(this);
                    setTimeout(function () {
                        t.find(":ui-button").button("refresh")
                    }, 1)
                }
                , g = function (t) {
                    var i = t.name
                        , s = t.form
                        , n = e([]);
                    return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                        return !this.form
                    })), n
                };
            e.widget("ui.button", {
                version: "1.11.4"
                , defaultElement: "<button>"
                , options: {
                    disabled: null
                    , text: !0
                    , label: null
                    , icons: {
                        primary: null
                        , secondary: null
                    }
                }
                , _create: function () {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var t = this
                        , i = this.options
                        , s = "checkbox" === this.type || "radio" === this.type
                        , n = s ? "" : "ui-state-active";
                    null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                        i.disabled || this === c && e(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function () {
                        i.disabled || e(this).removeClass(n)
                    }).bind("click" + this.eventNamespace, function (e) {
                        i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                    }), this._on({
                        focus: function () {
                            this.buttonElement.addClass("ui-state-focus")
                        }
                        , blur: function () {
                            this.buttonElement.removeClass("ui-state-focus")
                        }
                    }), s && this.element.bind("change" + this.eventNamespace, function () {
                        t.refresh()
                    }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                        return i.disabled ? !1 : void 0
                    }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                        if (i.disabled) return !1;
                        e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                        var s = t.element[0];
                        g(s).not(s).map(function () {
                            return e(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                        return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
                            c = null
                        }), void 0)
                    }).bind("mouseup" + this.eventNamespace, function () {
                        return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
                    }).bind("keydown" + this.eventNamespace, function (t) {
                        return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                        e(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                        t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                    })), this._setOption("disabled", i.disabled), this._resetButton()
                }
                , _determineButtonType: function () {
                    var e, t, i;
                    this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                }
                , widget: function () {
                    return this.buttonElement
                }
                , _destroy: function () {
                    this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
                }
                , _setOption: function (e, t) {
                    return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
                }
                , refresh: function () {
                    var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
                        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                }
                , _resetButton: function () {
                    if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
                    var t = this.buttonElement.removeClass(f)
                        , i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text()
                        , s = this.options.icons
                        , n = s.primary && s.secondary
                        , a = [];
                    s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
                }
            }), e.widget("ui.buttonset", {
                version: "1.11.4"
                , options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                }
                , _create: function () {
                    this.element.addClass("ui-buttonset")
                }
                , _init: function () {
                    this.refresh()
                }
                , _setOption: function (e, t) {
                    "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
                }
                , refresh: function () {
                    var t = "rtl" === this.element.css("direction")
                        , i = this.element.find(this.options.items)
                        , s = i.filter(":ui-button");
                    i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
                }
                , _destroy: function () {
                    this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            }), e.ui.button, e.extend(e.ui, {
                datepicker: {
                    version: "1.11.4"
                }
            });
            var v;
            e.extend(n.prototype, {
                markerClassName: "hasDatepicker"
                , maxRows: 4
                , _widgetDatepicker: function () {
                    return this.dpDiv
                }
                , setDefaults: function (e) {
                    return r(this._defaults, e || {}), this
                }
                , _attachDatepicker: function (t, i) {
                    var s, n, a;
                    s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
                }
                , _newInst: function (t, i) {
                    var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                    return {
                        id: s
                        , input: t
                        , selectedDay: 0
                        , selectedMonth: 0
                        , selectedYear: 0
                        , drawMonth: 0
                        , drawYear: 0
                        , inline: i
                        , dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                }
                , _connectDatepicker: function (t, i) {
                    var s = e(t);
                    i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
                }
                , _attachments: function (t, i) {
                    var s, n, a, o = this._get(i, "appendText")
                        , r = this._get(i, "isRTL");
                    i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                        src: a
                        , alt: n
                        , title: n
                    }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                        src: a
                        , alt: n
                        , title: n
                    }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
                        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                    }))
                }
                , _autoSize: function (e) {
                    if (this._get(e, "autoSize") && !e.inline) {
                        var t, i, s, n, a = new Date(2009, 11, 20)
                            , o = this._get(e, "dateFormat");
                        o.match(/[DM]/) && (t = function (e) {
                            for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n);
                            return s
                        }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
                    }
                }
                , _inlineDatepicker: function (t, i) {
                    var s = e(t);
                    s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
                }
                , _dialogDatepicker: function (t, i, s, n, a) {
                    var o, h, l, u, d, c = this._dialogInst;
                    return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
                }
                , _destroyDatepicker: function (t) {
                    var i, s = e(t)
                        , n = e.data(t, "datepicker");
                    s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null))
                }
                , _enableDatepicker: function (t) {
                    var i, s, n = e(t)
                        , a = e.data(t, "datepicker");
                    n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0"
                        , cursor: ""
                    })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                        return e === t ? null : e
                    }))
                }
                , _disableDatepicker: function (t) {
                    var i, s, n = e(t)
                        , a = e.data(t, "datepicker");
                    n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5"
                        , cursor: "default"
                    })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                        return e === t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t)
                }
                , _isDisabledDatepicker: function (e) {
                    if (!e) return !1;
                    for (var t = 0; this._disabledInputs.length > t; t++)
                        if (this._disabledInputs[t] === e) return !0;
                    return !1
                }
                , _getInst: function (t) {
                    try {
                        return e.data(t, "datepicker")
                    } catch (i) {
                        throw "Missing instance data for this datepicker"
                    }
                }
                , _optionDatepicker: function (t, i, s) {
                    var n, a, o, h, l = this._getInst(t);
                    return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
                }
                , _changeDatepicker: function (e, t, i) {
                    this._optionDatepicker(e, t, i)
                }
                , _refreshDatepicker: function (e) {
                    var t = this._getInst(e);
                    t && this._updateDatepicker(t)
                }
                , _setDateDatepicker: function (e, t) {
                    var i = this._getInst(e);
                    i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
                }
                , _getDateDatepicker: function (e, t) {
                    var i = this._getInst(e);
                    return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
                }
                , _doKeyDown: function (t) {
                    var i, s, n, a = e.datepicker._getInst(t.target)
                        , o = !0
                        , r = a.dpDiv.is(".ui-datepicker-rtl");
                    if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                    } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                    o && (t.preventDefault(), t.stopPropagation())
                }
                , _doKeyPress: function (t) {
                    var i, s, n = e.datepicker._getInst(t.target);
                    return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
                }
                , _doKeyUp: function (t) {
                    var i, s = e.datepicker._getInst(t.target);
                    if (s.input.val() !== s.lastVal) try {
                        i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
                    } catch (n) {}
                    return !0
                }
                , _showDatepicker: function (t) {
                    if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                        var i, n, a, o, h, l, u;
                        i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                            return o |= "fixed" === e(this).css("position"), !o
                        }), h = {
                            left: e.datepicker._pos[0]
                            , top: e.datepicker._pos[1]
                        }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                            position: "absolute"
                            , display: "block"
                            , top: "-1000px"
                        }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
                            position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute"
                            , display: "none"
                            , left: h.left + "px"
                            , top: h.top + "px"
                        }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
                    }
                }
                , _updateDatepicker: function (t) {
                    this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                    var i, s = this._getNumberOfMonths(t)
                        , n = s[1]
                        , a = 17
                        , r = t.dpDiv.find("." + this._dayOverClass + " a");
                    r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                        i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                    }, 0))
                }
                , _shouldFocusInput: function (e) {
                    return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
                }
                , _checkOffset: function (t, i, s) {
                    var n = t.dpDiv.outerWidth()
                        , a = t.dpDiv.outerHeight()
                        , o = t.input ? t.input.outerWidth() : 0
                        , r = t.input ? t.input.outerHeight() : 0
                        , h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft())
                        , l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
                    return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
                }
                , _findPos: function (t) {
                    for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
                    return i = e(t).offset(), [i.left, i.top]
                }
                , _hideDatepicker: function (t) {
                    var i, s, n, a, o = this._curInst;
                    !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
                        e.datepicker._tidyDialog(o)
                    }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute"
                        , left: "0"
                        , top: "-100px"
                    }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
                }
                , _tidyDialog: function (e) {
                    e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                }
                , _checkExternalClick: function (t) {
                    if (e.datepicker._curInst) {
                        var i = e(t.target)
                            , s = e.datepicker._getInst(i[0]);
                        (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
                    }
                }
                , _adjustDate: function (t, i, s) {
                    var n = e(t)
                        , a = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
                }
                , _gotoToday: function (t) {
                    var i, s = e(t)
                        , n = this._getInst(s[0]);
                    this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
                }
                , _selectMonthYear: function (t, i, s) {
                    var n = e(t)
                        , a = this._getInst(n[0]);
                    a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
                }
                , _selectDay: function (t, i, s, n) {
                    var a, o = e(t);
                    e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
                }
                , _clearDate: function (t) {
                    var i = e(t);
                    this._selectDate(i, "")
                }
                , _selectDate: function (t, i) {
                    var s, n = e(t)
                        , a = this._getInst(n[0]);
                    i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
                }
                , _updateAlternate: function (t) {
                    var i, s, n, a = this._get(t, "altField");
                    a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
                        e(this).val(n)
                    }))
                }
                , noWeekends: function (e) {
                    var t = e.getDay();
                    return [t > 0 && 6 > t, ""]
                }
                , iso8601Week: function (e) {
                    var t, i = new Date(e.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
                }
                , parseDate: function (t, i, s) {
                    if (null == t || null == i) throw "Invalid arguments";
                    if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
                    var n, a, o, r, h = 0
                        , l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff
                        , u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10)
                        , d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort
                        , c = (s ? s.dayNames : null) || this._defaults.dayNames
                        , p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort
                        , f = (s ? s.monthNames : null) || this._defaults.monthNames
                        , m = -1
                        , g = -1
                        , v = -1
                        , y = -1
                        , b = !1
                        , _ = function (e) {
                            var i = t.length > n + 1 && t.charAt(n + 1) === e;
                            return i && n++, i
                        }
                        , x = function (e) {
                            var t = _(e)
                                , s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2
                                , n = "y" === e ? s : 1
                                , a = RegExp("^\\d{" + n + "," + s + "}")
                                , o = i.substring(h).match(a);
                            if (!o) throw "Missing number at position " + h;
                            return h += o[0].length, parseInt(o[0], 10)
                        }
                        , w = function (t, s, n) {
                            var a = -1
                                , o = e.map(_(t) ? n : s, function (e, t) {
                                    return [[t, e]]
                                }).sort(function (e, t) {
                                    return -(e[1].length - t[1].length)
                                });
                            if (e.each(o, function (e, t) {
                                    var s = t[1];
                                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0
                                }), -1 !== a) return a + 1;
                            throw "Unknown name at position " + h
                        }
                        , k = function () {
                            if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
                            h++
                        };
                    for (n = 0; t.length > n; n++)
                        if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;
                        else switch (t.charAt(n)) {
                        case "d":
                            v = x("d");
                            break;
                        case "D":
                            w("D", d, c);
                            break;
                        case "o":
                            y = x("o");
                            break;
                        case "m":
                            g = x("m");
                            break;
                        case "M":
                            g = w("M", p, f);
                            break;
                        case "y":
                            m = x("y");
                            break;
                        case "@":
                            r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            _("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                        }
                    if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                    if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                        for (g = 1, v = y;;) {
                            if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
                            g++, v -= a
                        }
                    if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
                    return r
                }
                , ATOM: "yy-mm-dd"
                , COOKIE: "D, dd M yy"
                , ISO_8601: "yy-mm-dd"
                , RFC_822: "D, d M y"
                , RFC_850: "DD, dd-M-y"
                , RFC_1036: "D, d M y"
                , RFC_1123: "D, d M yy"
                , RFC_2822: "D, d M yy"
                , RSS: "D, d M y"
                , TICKS: "!"
                , TIMESTAMP: "@"
                , W3C: "yy-mm-dd"
                , _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925))
                , formatDate: function (e, t, i) {
                    if (!t) return "";
                    var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort
                        , a = (i ? i.dayNames : null) || this._defaults.dayNames
                        , o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort
                        , r = (i ? i.monthNames : null) || this._defaults.monthNames
                        , h = function (t) {
                            var i = e.length > s + 1 && e.charAt(s + 1) === t;
                            return i && s++, i
                        }
                        , l = function (e, t, i) {
                            var s = "" + t;
                            if (h(e))
                                for (; i > s.length;) s = "0" + s;
                            return s
                        }
                        , u = function (e, t, i, s) {
                            return h(e) ? s[t] : i[t]
                        }
                        , d = ""
                        , c = !1;
                    if (t)
                        for (s = 0; e.length > s; s++)
                            if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                            else switch (e.charAt(s)) {
                            case "d":
                                d += l("d", t.getDate(), 2);
                                break;
                            case "D":
                                d += u("D", t.getDay(), n, a);
                                break;
                            case "o":
                                d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += l("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += u("M", t.getMonth(), o, r);
                                break;
                            case "y":
                                d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                d += t.getTime();
                                break;
                            case "!":
                                d += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                h("'") ? d += "'" : c = !0;
                                break;
                            default:
                                d += e.charAt(s)
                            }
                    return d
                }
                , _possibleChars: function (e) {
                    var t, i = ""
                        , s = !1
                        , n = function (i) {
                            var s = e.length > t + 1 && e.charAt(t + 1) === i;
                            return s && t++, s
                        };
                    for (t = 0; e.length > t; t++)
                        if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                        else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? i += "'" : s = !0;
                            break;
                        default:
                            i += e.charAt(t)
                        }
                    return i
                }
                , _get: function (e, t) {
                    return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
                }
                , _setDateFromField: function (e, t) {
                    if (e.input.val() !== e.lastVal) {
                        var i = this._get(e, "dateFormat")
                            , s = e.lastVal = e.input ? e.input.val() : null
                            , n = this._getDefaultDate(e)
                            , a = n
                            , o = this._getFormatConfig(e);
                        try {
                            a = this.parseDate(i, s, o) || n
                        } catch (r) {
                            s = t ? "" : s
                        }
                        e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
                    }
                }
                , _getDefaultDate: function (e) {
                    return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
                }
                , _determineDate: function (t, i, s) {
                    var n = function (e) {
                            var t = new Date;
                            return t.setDate(t.getDate() + e), t
                        }
                        , a = function (i) {
                            try {
                                return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                            } catch (s) {}
                            for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                                switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                    break;
                                case "y":
                                case "Y":
                                    a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                                }
                                l = h.exec(i)
                            }
                            return new Date(a, o, r)
                        }
                        , o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
                    return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
                }
                , _daylightSavingAdjust: function (e) {
                    return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
                }
                , _setDate: function (e, t, i) {
                    var s = !t
                        , n = e.selectedMonth
                        , a = e.selectedYear
                        , o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                    e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
                }
                , _getDate: function (e) {
                    var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                    return t
                }
                , _attachHandlers: function (t) {
                    var i = this._get(t, "stepMonths")
                        , s = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function () {
                        var t = {
                            prev: function () {
                                e.datepicker._adjustDate(s, -i, "M")
                            }
                            , next: function () {
                                e.datepicker._adjustDate(s, +i, "M")
                            }
                            , hide: function () {
                                e.datepicker._hideDatepicker()
                            }
                            , today: function () {
                                e.datepicker._gotoToday(s)
                            }
                            , selectDay: function () {
                                return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            }
                            , selectMonth: function () {
                                return e.datepicker._selectMonthYear(s, this, "M"), !1
                            }
                            , selectYear: function () {
                                return e.datepicker._selectMonthYear(s, this, "Y"), !1
                            }
                        };
                        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
                }
                , _generateHTML: function (e) {
                    var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F, E, O, j, W, L = new Date
                        , R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate()))
                        , Y = this._get(e, "isRTL")
                        , B = this._get(e, "showButtonPanel")
                        , J = this._get(e, "hideIfNoPrevNext")
                        , q = this._get(e, "navigationAsDateFormat")
                        , K = this._getNumberOfMonths(e)
                        , V = this._get(e, "showCurrentAtPos")
                        , U = this._get(e, "stepMonths")
                        , Q = 1 !== K[0] || 1 !== K[1]
                        , G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9))
                        , X = this._getMinMaxDate(e, "min")
                        , $ = this._getMinMaxDate(e, "max")
                        , Z = e.drawMonth - V
                        , et = e.drawYear;
                    if (0 > Z && (Z += 12, et--), $)
                        for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
                    for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
                        for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
                            if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
                                if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
                                case 0:
                                    M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                    break;
                                case K[1] - 1:
                                    M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                    break;
                                default:
                                    M += " ui-datepicker-group-middle", S = ""
                                }
                                M += "'>"
                            }
                            for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>";
                            for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) {
                                for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                                M += E + "</tr>"
                            }
                            Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                        }
                        _ += k
                    }
                    return _ += l, e._keyEvent = !1, _
                }
                , _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
                    var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth")
                        , v = this._get(e, "changeYear")
                        , y = this._get(e, "showMonthAfterYear")
                        , b = "<div class='ui-datepicker-title'>"
                        , _ = "";
                    if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                    else {
                        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                        _ += "</select>"
                    }
                    if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                        if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                        else {
                            for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
                                    var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                                    return isNaN(t) ? c : t
                                }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                        }
                    return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
                }
                , _adjustInstDate: function (e, t, i) {
                    var s = e.drawYear + ("Y" === i ? t : 0)
                        , n = e.drawMonth + ("M" === i ? t : 0)
                        , a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0)
                        , o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
                    e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
                }
                , _restrictMinMax: function (e, t) {
                    var i = this._getMinMaxDate(e, "min")
                        , s = this._getMinMaxDate(e, "max")
                        , n = i && i > t ? i : t;
                    return s && n > s ? s : n
                }
                , _notifyChange: function (e) {
                    var t = this._get(e, "onChangeMonthYear");
                    t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
                }
                , _getNumberOfMonths: function (e) {
                    var t = this._get(e, "numberOfMonths");
                    return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
                }
                , _getMinMaxDate: function (e, t) {
                    return this._determineDate(e, this._get(e, t + "Date"), null)
                }
                , _getDaysInMonth: function (e, t) {
                    return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
                }
                , _getFirstDayOfMonth: function (e, t) {
                    return new Date(e, t, 1).getDay()
                }
                , _canAdjustMonth: function (e, t, i, s) {
                    var n = this._getNumberOfMonths(e)
                        , a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
                    return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
                }
                , _isInRange: function (e, t) {
                    var i, s, n = this._getMinMaxDate(e, "min")
                        , a = this._getMinMaxDate(e, "max")
                        , o = null
                        , r = null
                        , h = this._get(e, "yearRange");
                    return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
                }
                , _getFormatConfig: function (e) {
                    var t = this._get(e, "shortYearCutoff");
                    return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                        shortYearCutoff: t
                        , dayNamesShort: this._get(e, "dayNamesShort")
                        , dayNames: this._get(e, "dayNames")
                        , monthNamesShort: this._get(e, "monthNamesShort")
                        , monthNames: this._get(e, "monthNames")
                    }
                }
                , _formatDate: function (e, t, i, s) {
                    t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                    var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                    return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
                }
            }), e.fn.datepicker = function (t) {
                if (!this.length) return this;
                e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
                var i = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
                    "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
                }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
            }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
                version: "1.11.4"
                , widgetEventPrefix: "drag"
                , options: {
                    addClasses: !0
                    , appendTo: "parent"
                    , axis: !1
                    , connectToSortable: !1
                    , containment: !1
                    , cursor: "auto"
                    , cursorAt: !1
                    , grid: !1
                    , handle: !1
                    , helper: "original"
                    , iframeFix: !1
                    , opacity: !1
                    , refreshPositions: !1
                    , revert: !1
                    , revertDuration: 500
                    , scope: "default"
                    , scroll: !0
                    , scrollSensitivity: 20
                    , scrollSpeed: 20
                    , snap: !1
                    , snapMode: "both"
                    , snapTolerance: 20
                    , stack: !1
                    , zIndex: !1
                    , drag: null
                    , start: null
                    , stop: null
                }
                , _create: function () {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
                }
                , _setOption: function (e, t) {
                    this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
                }
                , _destroy: function () {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
                }
                , _mouseCapture: function (t) {
                    var i = this.options;
                    return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
                }
                , _blockFrames: function (t) {
                    this.iframeBlocks = this.document.find(t).map(function () {
                        var t = e(this);
                        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                    })
                }
                , _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                }
                , _blurActiveElement: function (t) {
                    var i = this.document[0];
                    if (this.handleElement.is(t.target)) try {
                        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
                    } catch (s) {}
                }
                , _mouseStart: function (t) {
                    var i = this.options;
                    return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                        return "fixed" === e(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                }
                , _refreshOffsets: function (e) {
                    this.offset = {
                        top: this.positionAbs.top - this.margins.top
                        , left: this.positionAbs.left - this.margins.left
                        , scroll: !1
                        , parent: this._getParentOffset()
                        , relative: this._getRelativeOffset()
                    }, this.offset.click = {
                        left: e.pageX - this.offset.left
                        , top: e.pageY - this.offset.top
                    }
                }
                , _mouseDrag: function (t, i) {
                    if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                        var s = this._uiHash();
                        if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                        this.position = s.position
                    }
                    return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
                }
                , _mouseStop: function (t) {
                    var i = this
                        , s = !1;
                    return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                        i._trigger("stop", t) !== !1 && i._clear()
                    }) : this._trigger("stop", t) !== !1 && this._clear(), !1
                }
                , _mouseUp: function (t) {
                    return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
                }
                , cancel: function () {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
                }
                , _getHandle: function (t) {
                    return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
                }
                , _setHandleClassName: function () {
                    this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
                }
                , _removeHandleClassName: function () {
                    this.handleElement.removeClass("ui-draggable-handle")
                }
                , _createHelper: function (t) {
                    var i = this.options
                        , s = e.isFunction(i.helper)
                        , n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                    return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
                }
                , _setPositionRelative: function () {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                }
                , _adjustOffsetFromHelper: function (t) {
                    "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                        left: +t[0]
                        , top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                }
                , _isRootNode: function (e) {
                    return /(html|body)/i.test(e.tagName) || e === this.document[0]
                }
                , _getParentOffset: function () {
                    var t = this.offsetParent.offset()
                        , i = this.document[0];
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                        top: 0
                        , left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0)
                        , left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                }
                , _getRelativeOffset: function () {
                    if ("relative" !== this.cssPosition) return {
                        top: 0
                        , left: 0
                    };
                    var e = this.element.position()
                        , t = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop())
                        , left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                    }
                }
                , _cacheMargins: function () {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0
                        , top: parseInt(this.element.css("marginTop"), 10) || 0
                        , right: parseInt(this.element.css("marginRight"), 10) || 0
                        , bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                }
                , _cacheHelperProportions: function () {
                    this.helperProportions = {
                        width: this.helper.outerWidth()
                        , height: this.helper.outerHeight()
                    }
                }
                , _setContainment: function () {
                    var t, i, s, n = this.options
                        , a = this.document[0];
                    return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
                }
                , _convertPositionTo: function (e, t) {
                    t || (t = this.position);
                    var i = "absolute" === e ? 1 : -1
                        , s = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i
                        , left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                    }
                }
                , _generatePosition: function (e, t) {
                    var i, s, n, a, o = this.options
                        , r = this._isRootNode(this.scrollParent[0])
                        , h = e.pageX
                        , l = e.pageY;
                    return r && this.offset.scroll || (this.offset.scroll = {
                        top: this.scrollParent.scrollTop()
                        , left: this.scrollParent.scrollLeft()
                    }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top)
                        , left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                    }
                }
                , _clear: function () {
                    this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                }
                , _normalizeRightBottom: function () {
                    "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
                }
                , _trigger: function (t, i, s) {
                    return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
                }
                , plugins: {}
                , _uiHash: function () {
                    return {
                        helper: this.helper
                        , position: this.position
                        , originalPosition: this.originalPosition
                        , offset: this.positionAbs
                    }
                }
            }), e.ui.plugin.add("draggable", "connectToSortable", {
                start: function (t, i, s) {
                    var n = e.extend({}, i, {
                        item: s.element
                    });
                    s.sortables = [], e(s.options.connectToSortable).each(function () {
                        var i = e(this).sortable("instance");
                        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
                    })
                }
                , stop: function (t, i, s) {
                    var n = e.extend({}, i, {
                        item: s.element
                    });
                    s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
                        var e = this;
                        e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                            position: e.placeholder.css("position")
                            , top: e.placeholder.css("top")
                            , left: e.placeholder.css("left")
                        }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                    })
                }
                , drag: function (t, i, s) {
                    e.each(s.sortables, function () {
                        var n = !1
                            , a = this;
                        a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
                            return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                        })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
                            return i.helper[0]
                        }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
                            this.refreshPositions()
                        }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
                            this.refreshPositions()
                        }))
                    })
                }
            }), e.ui.plugin.add("draggable", "cursor", {
                start: function (t, i, s) {
                    var n = e("body")
                        , a = s.options;
                    n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
                }
                , stop: function (t, i, s) {
                    var n = s.options;
                    n._cursor && e("body").css("cursor", n._cursor)
                }
            }), e.ui.plugin.add("draggable", "opacity", {
                start: function (t, i, s) {
                    var n = e(i.helper)
                        , a = s.options;
                    n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
                }
                , stop: function (t, i, s) {
                    var n = s.options;
                    n._opacity && e(i.helper).css("opacity", n._opacity)
                }
            }), e.ui.plugin.add("draggable", "scroll", {
                start: function (e, t, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                }
                , drag: function (t, i, s) {
                    var n = s.options
                        , a = !1
                        , o = s.scrollParentNotHidden[0]
                        , r = s.document[0];
                    o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
                }
            }), e.ui.plugin.add("draggable", "snap", {
                start: function (t, i, s) {
                    var n = s.options;
                    s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                        var t = e(this)
                            , i = t.offset();
                        this !== s.element[0] && s.snapElements.push({
                            item: this
                            , width: t.outerWidth()
                            , height: t.outerHeight()
                            , top: i.top
                            , left: i.left
                        })
                    })
                }
                , drag: function (t, i, s) {
                    var n, a, o, r, h, l, u, d, c, p, f = s.options
                        , m = f.snapTolerance
                        , g = i.offset.left
                        , v = g + s.helperProportions.width
                        , y = i.offset.top
                        , b = y + s.helperProportions.height;
                    for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                        top: u - s.helperProportions.height
                        , left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d
                        , left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0
                        , left: h - s.helperProportions.width
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0
                        , left: l
                    }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                        top: u
                        , left: 0
                    }).top), a && (i.position.top = s._convertPositionTo("relative", {
                        top: d - s.helperProportions.height
                        , left: 0
                    }).top), o && (i.position.left = s._convertPositionTo("relative", {
                        top: 0
                        , left: h
                    }).left), r && (i.position.left = s._convertPositionTo("relative", {
                        top: 0
                        , left: l - s.helperProportions.width
                    }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = n || a || o || r || p)
                }
            }), e.ui.plugin.add("draggable", "stack", {
                start: function (t, i, s) {
                    var n, a = s.options
                        , o = e.makeArray(e(a.stack)).sort(function (t, i) {
                            return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                        });
                    o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
                        e(this).css("zIndex", n + t)
                    }), this.css("zIndex", n + o.length))
                }
            }), e.ui.plugin.add("draggable", "zIndex", {
                start: function (t, i, s) {
                    var n = e(i.helper)
                        , a = s.options;
                    n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
                }
                , stop: function (t, i, s) {
                    var n = s.options;
                    n._zIndex && e(i.helper).css("zIndex", n._zIndex)
                }
            }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
                version: "1.11.4"
                , widgetEventPrefix: "resize"
                , options: {
                    alsoResize: !1
                    , animate: !1
                    , animateDuration: "slow"
                    , animateEasing: "swing"
                    , aspectRatio: !1
                    , autoHide: !1
                    , containment: !1
                    , ghost: !1
                    , grid: !1
                    , handles: "e,s,se"
                    , helper: !1
                    , maxHeight: null
                    , maxWidth: null
                    , minHeight: 10
                    , minWidth: 10
                    , zIndex: 90
                    , resize: null
                    , start: null
                    , stop: null
                }
                , _num: function (e) {
                    return parseInt(e, 10) || 0
                }
                , _isNumber: function (e) {
                    return !isNaN(parseInt(e, 10))
                }
                , _hasScroll: function (t, i) {
                    if ("hidden" === e(t).css("overflow")) return !1;
                    var s = i && "left" === i ? "scrollLeft" : "scrollTop"
                        , n = !1;
                    return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
                }
                , _create: function () {
                    var t, i, s, n, a, o = this
                        , r = this.options;
                    if (this.element.addClass("ui-resizable"), e.extend(this, {
                            _aspectRatio: !!r.aspectRatio
                            , aspectRatio: r.aspectRatio
                            , originalElement: this.element
                            , _proportionallyResizeElements: []
                            , _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                            position: this.element.css("position")
                            , width: this.element.outerWidth()
                            , height: this.element.outerHeight()
                            , top: this.element.css("top")
                            , left: this.element.css("left")
                        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                            marginLeft: this.originalElement.css("marginLeft")
                            , marginTop: this.originalElement.css("marginTop")
                            , marginRight: this.originalElement.css("marginRight")
                            , marginBottom: this.originalElement.css("marginBottom")
                        }), this.originalElement.css({
                            marginLeft: 0
                            , marginTop: 0
                            , marginRight: 0
                            , marginBottom: 0
                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static"
                            , zoom: 1
                            , display: "block"
                        })), this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n"
                            , e: ".ui-resizable-e"
                            , s: ".ui-resizable-s"
                            , w: ".ui-resizable-w"
                            , se: ".ui-resizable-se"
                            , sw: ".ui-resizable-sw"
                            , ne: ".ui-resizable-ne"
                            , nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                            zIndex: r.zIndex
                        }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
                    this._renderAxis = function (t) {
                        var i, s, n, a;
                        t = t || this.element;
                        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                            mousedown: o._mouseDown
                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                    }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
                        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
                    }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
                    }).mouseleave(function () {
                        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                    })), this._mouseInit()
                }
                , _destroy: function () {
                    this._mouseDestroy();
                    var t, i = function (t) {
                        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                        position: t.css("position")
                        , width: t.outerWidth()
                        , height: t.outerHeight()
                        , top: t.css("top")
                        , left: t.css("left")
                    }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
                }
                , _mouseCapture: function (t) {
                    var i, s, n = !1;
                    for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
                    return !this.options.disabled && n
                }
                , _mouseStart: function (t) {
                    var i, s, n, a = this.options
                        , o = this.element;
                    return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: i
                        , top: s
                    }, this.size = this._helper ? {
                        width: this.helper.width()
                        , height: this.helper.height()
                    } : {
                        width: o.width()
                        , height: o.height()
                    }, this.originalSize = this._helper ? {
                        width: o.outerWidth()
                        , height: o.outerHeight()
                    } : {
                        width: o.width()
                        , height: o.height()
                    }, this.sizeDiff = {
                        width: o.outerWidth() - o.width()
                        , height: o.outerHeight() - o.height()
                    }, this.originalPosition = {
                        left: i
                        , top: s
                    }, this.originalMousePosition = {
                        left: t.pageX
                        , top: t.pageY
                    }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
                }
                , _mouseDrag: function (t) {
                    var i, s, n = this.originalMousePosition
                        , a = this.axis
                        , o = t.pageX - n.left || 0
                        , r = t.pageY - n.top || 0
                        , h = this._change[a];
                    return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
                }
                , _mouseStop: function (t) {
                    this.resizing = !1;
                    var i, s, n, a, o, r, h, l = this.options
                        , u = this;
                    return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                        width: u.helper.width() - a
                        , height: u.helper.height() - n
                    }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                        top: h
                        , left: r
                    })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                }
                , _updatePrevProperties: function () {
                    this.prevPosition = {
                        top: this.position.top
                        , left: this.position.left
                    }, this.prevSize = {
                        width: this.size.width
                        , height: this.size.height
                    }
                }
                , _applyChanges: function () {
                    var e = {};
                    return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
                }
                , _updateVirtualBoundaries: function (e) {
                    var t, i, s, n, a, o = this.options;
                    a = {
                        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0
                        , maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0
                        , minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0
                        , maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
                    }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
                }
                , _updateCache: function (e) {
                    this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
                }
                , _updateRatio: function (e) {
                    var t = this.position
                        , i = this.size
                        , s = this.axis;
                    return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
                }
                , _respectSize: function (e) {
                    var t = this._vBoundaries
                        , i = this.axis
                        , s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width
                        , n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height
                        , a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width
                        , o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height
                        , r = this.originalPosition.left + this.originalSize.width
                        , h = this.position.top + this.size.height
                        , l = /sw|nw|w/.test(i)
                        , u = /nw|ne|n/.test(i);
                    return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
                }
                , _getPaddingPlusBorderDimensions: function (e) {
                    for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
                    return {
                        height: i[0] + i[2]
                        , width: i[1] + i[3]
                    }
                }
                , _proportionallyResize: function () {
                    if (this._proportionallyResizeElements.length)
                        for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                            height: i.height() - this.outerDimensions.height || 0
                            , width: i.width() - this.outerDimensions.width || 0
                        })
                }
                , _renderProxy: function () {
                    var t = this.element
                        , i = this.options;
                    this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1
                        , height: this.element.outerHeight() - 1
                        , position: "absolute"
                        , left: this.elementOffset.left + "px"
                        , top: this.elementOffset.top + "px"
                        , zIndex: ++i.zIndex
                    }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                }
                , _change: {
                    e: function (e, t) {
                        return {
                            width: this.originalSize.width + t
                        }
                    }
                    , w: function (e, t) {
                        var i = this.originalSize
                            , s = this.originalPosition;
                        return {
                            left: s.left + t
                            , width: i.width - t
                        }
                    }
                    , n: function (e, t, i) {
                        var s = this.originalSize
                            , n = this.originalPosition;
                        return {
                            top: n.top + i
                            , height: s.height - i
                        }
                    }
                    , s: function (e, t, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    }
                    , se: function (t, i, s) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
                    }
                    , sw: function (t, i, s) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
                    }
                    , ne: function (t, i, s) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
                    }
                    , nw: function (t, i, s) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
                    }
                }
                , _propagate: function (t, i) {
                    e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
                }
                , plugins: {}
                , ui: function () {
                    return {
                        originalElement: this.originalElement
                        , element: this.element
                        , helper: this.helper
                        , position: this.position
                        , size: this.size
                        , originalSize: this.originalSize
                        , originalPosition: this.originalPosition
                    }
                }
            }), e.ui.plugin.add("resizable", "animate", {
                stop: function (t) {
                    var i = e(this).resizable("instance")
                        , s = i.options
                        , n = i._proportionallyResizeElements
                        , a = n.length && /textarea/i.test(n[0].nodeName)
                        , o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
                        , r = a ? 0 : i.sizeDiff.width
                        , h = {
                            width: i.size.width - r
                            , height: i.size.height - o
                        }
                        , l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
                        , u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(e.extend(h, u && l ? {
                        top: u
                        , left: l
                    } : {}), {
                        duration: s.animateDuration
                        , easing: s.animateEasing
                        , step: function () {
                            var s = {
                                width: parseInt(i.element.css("width"), 10)
                                , height: parseInt(i.element.css("height"), 10)
                                , top: parseInt(i.element.css("top"), 10)
                                , left: parseInt(i.element.css("left"), 10)
                            };
                            n && n.length && e(n[0]).css({
                                width: s.width
                                , height: s.height
                            }), i._updateCache(s), i._propagate("resize", t)
                        }
                    })
                }
            }), e.ui.plugin.add("resizable", "containment", {
                start: function () {
                    var t, i, s, n, a, o, r, h = e(this).resizable("instance")
                        , l = h.options
                        , u = h.element
                        , d = l.containment
                        , c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
                    c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
                        left: 0
                        , top: 0
                    }, h.containerPosition = {
                        left: 0
                        , top: 0
                    }, h.parentData = {
                        element: e(document)
                        , left: 0
                        , top: 0
                        , width: e(document).width()
                        , height: e(document).height() || document.body.parentNode.scrollHeight
                    }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
                        i[e] = h._num(t.css("padding" + s))
                    }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                        height: t.innerHeight() - i[3]
                        , width: t.innerWidth() - i[1]
                    }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
                        element: c
                        , left: s.left
                        , top: s.top
                        , width: o
                        , height: r
                    }))
                }
                , resize: function (t) {
                    var i, s, n, a, o = e(this).resizable("instance")
                        , r = o.options
                        , h = o.containerOffset
                        , l = o.position
                        , u = o._aspectRatio || t.shiftKey
                        , d = {
                            top: 0
                            , left: 0
                        }
                        , c = o.containerElement
                        , p = !0;
                    c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
                }
                , stop: function () {
                    var t = e(this).resizable("instance")
                        , i = t.options
                        , s = t.containerOffset
                        , n = t.containerPosition
                        , a = t.containerElement
                        , o = e(t.helper)
                        , r = o.offset()
                        , h = o.outerWidth() - t.sizeDiff.width
                        , l = o.outerHeight() - t.sizeDiff.height;
                    t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                        left: r.left - n.left - s.left
                        , width: h
                        , height: l
                    }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                        left: r.left - n.left - s.left
                        , width: h
                        , height: l
                    })
                }
            }), e.ui.plugin.add("resizable", "alsoResize", {
                start: function () {
                    var t = e(this).resizable("instance")
                        , i = t.options;
                    e(i.alsoResize).each(function () {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10)
                            , height: parseInt(t.height(), 10)
                            , left: parseInt(t.css("left"), 10)
                            , top: parseInt(t.css("top"), 10)
                        })
                    })
                }
                , resize: function (t, i) {
                    var s = e(this).resizable("instance")
                        , n = s.options
                        , a = s.originalSize
                        , o = s.originalPosition
                        , r = {
                            height: s.size.height - a.height || 0
                            , width: s.size.width - a.width || 0
                            , top: s.position.top - o.top || 0
                            , left: s.position.left - o.left || 0
                        };
                    e(n.alsoResize).each(function () {
                        var t = e(this)
                            , s = e(this).data("ui-resizable-alsoresize")
                            , n = {}
                            , a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(a, function (e, t) {
                            var i = (s[t] || 0) + (r[t] || 0);
                            i && i >= 0 && (n[t] = i || null)
                        }), t.css(n)
                    })
                }
                , stop: function () {
                    e(this).removeData("resizable-alsoresize")
                }
            }), e.ui.plugin.add("resizable", "ghost", {
                start: function () {
                    var t = e(this).resizable("instance")
                        , i = t.options
                        , s = t.size;
                    t.ghost = t.originalElement.clone(), t.ghost.css({
                        opacity: .25
                        , display: "block"
                        , position: "relative"
                        , height: s.height
                        , width: s.width
                        , margin: 0
                        , left: 0
                        , top: 0
                    }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
                }
                , resize: function () {
                    var t = e(this).resizable("instance");
                    t.ghost && t.ghost.css({
                        position: "relative"
                        , height: t.size.height
                        , width: t.size.width
                    })
                }
                , stop: function () {
                    var t = e(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }), e.ui.plugin.add("resizable", "grid", {
                resize: function () {
                    var t, i = e(this).resizable("instance")
                        , s = i.options
                        , n = i.size
                        , a = i.originalSize
                        , o = i.originalPosition
                        , r = i.axis
                        , h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid
                        , l = h[0] || 1
                        , u = h[1] || 1
                        , d = Math.round((n.width - a.width) / l) * l
                        , c = Math.round((n.height - a.height) / u) * u
                        , p = a.width + d
                        , f = a.height + c
                        , m = s.maxWidth && p > s.maxWidth
                        , g = s.maxHeight && f > s.maxHeight
                        , v = s.minWidth && s.minWidth > p
                        , y = s.minHeight && s.minHeight > f;
                    s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
                }
            }), e.ui.resizable, e.widget("ui.dialog", {
                version: "1.11.4"
                , options: {
                    appendTo: "body"
                    , autoOpen: !0
                    , buttons: []
                    , closeOnEscape: !0
                    , closeText: "Close"
                    , dialogClass: ""
                    , draggable: !0
                    , hide: null
                    , height: "auto"
                    , maxHeight: null
                    , maxWidth: null
                    , minHeight: 150
                    , minWidth: 150
                    , modal: !1
                    , position: {
                        my: "center"
                        , at: "center"
                        , of: window
                        , collision: "fit"
                        , using: function (t) {
                            var i = e(this).css(t).offset().top;
                            0 > i && e(this).css("top", t.top - i)
                        }
                    }
                    , resizable: !0
                    , show: null
                    , title: null
                    , width: 300
                    , beforeClose: null
                    , close: null
                    , drag: null
                    , dragStart: null
                    , dragStop: null
                    , focus: null
                    , open: null
                    , resize: null
                    , resizeStart: null
                    , resizeStop: null
                }
                , sizeRelatedOptions: {
                    buttons: !0
                    , height: !0
                    , maxHeight: !0
                    , maxWidth: !0
                    , minHeight: !0
                    , minWidth: !0
                    , width: !0
                }
                , resizableRelatedOptions: {
                    maxHeight: !0
                    , maxWidth: !0
                    , minHeight: !0
                    , minWidth: !0
                }
                , _create: function () {
                    this.originalCss = {
                        display: this.element[0].style.display
                        , width: this.element[0].style.width
                        , minHeight: this.element[0].style.minHeight
                        , maxHeight: this.element[0].style.maxHeight
                        , height: this.element[0].style.height
                    }, this.originalPosition = {
                        parent: this.element.parent()
                        , index: this.element.parent().children().index(this.element)
                    }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                }
                , _init: function () {
                    this.options.autoOpen && this.open()
                }
                , _appendTo: function () {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
                }
                , _destroy: function () {
                    var e, t = this.originalPosition;
                    this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
                }
                , widget: function () {
                    return this.uiDialog
                }
                , disable: e.noop
                , enable: e.noop
                , close: function (t) {
                    var i, s = this;
                    if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                            i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                        } catch (n) {}
                        this._hide(this.uiDialog, this.options.hide, function () {
                            s._trigger("close", t)
                        })
                    }
                }
                , isOpen: function () {
                    return this._isOpen
                }
                , moveToTop: function () {
                    this._moveToTop()
                }
                , _moveToTop: function (t, i) {
                    var s = !1
                        , n = this.uiDialog.siblings(".ui-front:visible").map(function () {
                            return +e(this).css("z-index")
                        }).get()
                        , a = Math.max.apply(null, n);
                    return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
                }
                , open: function () {
                    var t = this;
                    return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                        t._focusTabbable(), t._trigger("focus")
                    }), this._makeFocusTarget(), this._trigger("open"), void 0)
                }
                , _focusTabbable: function () {
                    var e = this._focusedElement;
                    e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
                }
                , _keepFocus: function (t) {
                    function i() {
                        var t = this.document[0].activeElement
                            , i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                        i || this._focusTabbable()
                    }
                    t.preventDefault(), i.call(this), this._delay(i)
                }
                , _createWrapper: function () {
                    this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                        tabIndex: -1
                        , role: "dialog"
                    }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                        keydown: function (t) {
                            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                            if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                                var i = this.uiDialog.find(":tabbable")
                                    , s = i.filter(":first")
                                    , n = i.filter(":last");
                                t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                                    n.focus()
                                }), t.preventDefault()) : (this._delay(function () {
                                    s.focus()
                                }), t.preventDefault())
                            }
                        }
                        , mousedown: function (e) {
                            this._moveToTop(e) && this._focusTabbable()
                        }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                }
                , _createTitlebar: function () {
                    var t;
                    this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                        mousedown: function (t) {
                            e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                        label: this.options.closeText
                        , icons: {
                            primary: "ui-icon-closethick"
                        }
                        , text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                        click: function (e) {
                            e.preventDefault(), this.close(e)
                        }
                    }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                        "aria-labelledby": t.attr("id")
                    })
                }
                , _title: function (e) {
                    this.options.title || e.html("&#160;"), e.text(this.options.title)
                }
                , _createButtonPane: function () {
                    this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
                }
                , _createButtons: function () {
                    var t = this
                        , i = this.options.buttons;
                    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
                        var n, a;
                        s = e.isFunction(s) ? {
                            click: s
                            , text: i
                        } : s, s = e.extend({
                            type: "button"
                        }, s), n = s.click, s.click = function () {
                            n.apply(t.element[0], arguments)
                        }, a = {
                            icons: s.icons
                            , text: s.showText
                        }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
                    }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
                }
                , _makeDraggable: function () {
                    function t(e) {
                        return {
                            position: e.position
                            , offset: e.offset
                        }
                    }
                    var i = this
                        , s = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close"
                        , handle: ".ui-dialog-titlebar"
                        , containment: "document"
                        , start: function (s, n) {
                            e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n))
                        }
                        , drag: function (e, s) {
                            i._trigger("drag", e, t(s))
                        }
                        , stop: function (n, a) {
                            var o = a.offset.left - i.document.scrollLeft()
                                , r = a.offset.top - i.document.scrollTop();
                            s.position = {
                                my: "left top"
                                , at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r
                                , of: i.window
                            }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                        }
                    })
                }
                , _makeResizable: function () {
                    function t(e) {
                        return {
                            originalPosition: e.originalPosition
                            , originalSize: e.originalSize
                            , position: e.position
                            , size: e.size
                        }
                    }
                    var i = this
                        , s = this.options
                        , n = s.resizable
                        , a = this.uiDialog.css("position")
                        , o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content"
                        , containment: "document"
                        , alsoResize: this.element
                        , maxWidth: s.maxWidth
                        , maxHeight: s.maxHeight
                        , minWidth: s.minWidth
                        , minHeight: this._minHeight()
                        , handles: o
                        , start: function (s, n) {
                            e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n))
                        }
                        , resize: function (e, s) {
                            i._trigger("resize", e, t(s))
                        }
                        , stop: function (n, a) {
                            var o = i.uiDialog.offset()
                                , r = o.left - i.document.scrollLeft()
                                , h = o.top - i.document.scrollTop();
                            s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                                my: "left top"
                                , at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h
                                , of: i.window
                            }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                        }
                    }).css("position", a)
                }
                , _trackFocus: function () {
                    this._on(this.widget(), {
                        focusin: function (t) {
                            this._makeFocusTarget(), this._focusedElement = e(t.target)
                        }
                    })
                }
                , _makeFocusTarget: function () {
                    this._untrackInstance(), this._trackingInstances().unshift(this)
                }
                , _untrackInstance: function () {
                    var t = this._trackingInstances()
                        , i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
                }
                , _trackingInstances: function () {
                    var e = this.document.data("ui-dialog-instances");
                    return e || (e = [], this.document.data("ui-dialog-instances", e)), e
                }
                , _minHeight: function () {
                    var e = this.options;
                    return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
                }
                , _position: function () {
                    var e = this.uiDialog.is(":visible");
                    e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
                }
                , _setOptions: function (t) {
                    var i = this
                        , s = !1
                        , n = {};
                    e.each(t, function (e, t) {
                        i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t)
                    }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                }
                , _setOption: function (e, t) {
                    var i, s, n = this.uiDialog;
                    "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                        label: "" + t
                    }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                }
                , _size: function () {
                    var e, t, i, s = this.options;
                    this.element.show().css({
                        width: "auto"
                        , minHeight: 0
                        , maxHeight: "none"
                        , height: 0
                    }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                        height: "auto"
                        , width: s.width
                    }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
                        minHeight: t
                        , maxHeight: i
                        , height: "auto"
                    }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                }
                , _blockFrames: function () {
                    this.iframeBlocks = this.document.find("iframe").map(function () {
                        var t = e(this);
                        return e("<div>").css({
                            position: "absolute"
                            , width: t.outerWidth()
                            , height: t.outerHeight()
                        }).appendTo(t.parent()).offset(t.offset())[0]
                    })
                }
                , _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                }
                , _allowInteraction: function (t) {
                    return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
                }
                , _createOverlay: function () {
                    if (this.options.modal) {
                        var t = !0;
                        this._delay(function () {
                            t = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function (e) {
                                t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                }
                , _destroyOverlay: function () {
                    if (this.options.modal && this.overlay) {
                        var e = this.document.data("ui-dialog-overlays") - 1;
                        e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                    }
                }
            }), e.widget("ui.droppable", {
                version: "1.11.4"
                , widgetEventPrefix: "drop"
                , options: {
                    accept: "*"
                    , activeClass: !1
                    , addClasses: !0
                    , greedy: !1
                    , hoverClass: !1
                    , scope: "default"
                    , tolerance: "intersect"
                    , activate: null
                    , deactivate: null
                    , drop: null
                    , out: null
                    , over: null
                }
                , _create: function () {
                    var t, i = this.options
                        , s = i.accept;
                    this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
                        return e.is(s)
                    }, this.proportions = function () {
                        return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                            width: this.element[0].offsetWidth
                            , height: this.element[0].offsetHeight
                        }
                    }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
                }
                , _addToManager: function (t) {
                    e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
                }
                , _splice: function (e) {
                    for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
                }
                , _destroy: function () {
                    var t = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
                }
                , _setOption: function (t, i) {
                    if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
                        return e.is(i)
                    };
                    else if ("scope" === t) {
                        var s = e.ui.ddmanager.droppables[this.options.scope];
                        this._splice(s), this._addToManager(i)
                    }
                    this._super(t, i)
                }
                , _activate: function (t) {
                    var i = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
                }
                , _deactivate: function (t) {
                    var i = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
                }
                , _over: function (t) {
                    var i = e.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
                }
                , _out: function (t) {
                    var i = e.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
                }
                , _drop: function (t, i) {
                    var s = i || e.ui.ddmanager.current
                        , n = !1;
                    return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                        var i = e(this).droppable("instance");
                        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, {
                            offset: i.element.offset()
                        }), i.options.tolerance, t) ? (n = !0, !1) : void 0
                    }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
                }
                , ui: function (e) {
                    return {
                        draggable: e.currentItem || e.element
                        , helper: e.helper
                        , position: e.position
                        , offset: e.positionAbs
                    }
                }
            }), e.ui.intersect = function () {
                function e(e, t, i) {
                    return e >= t && t + i > e
                }
                return function (t, i, s, n) {
                    if (!i.offset) return !1;
                    var a = (t.positionAbs || t.position.absolute).left + t.margins.left
                        , o = (t.positionAbs || t.position.absolute).top + t.margins.top
                        , r = a + t.helperProportions.width
                        , h = o + t.helperProportions.height
                        , l = i.offset.left
                        , u = i.offset.top
                        , d = l + i.proportions().width
                        , c = u + i.proportions().height;
                    switch (s) {
                    case "fit":
                        return a >= l && d >= r && o >= u && c >= h;
                    case "intersect":
                        return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
                    case "pointer":
                        return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
                    case "touch":
                        return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
                    default:
                        return !1
                    }
                }
            }(), e.ui.ddmanager = {
                current: null
                , droppables: {
                    "default": []
                }
                , prepareOffsets: function (t, i) {
                    var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || []
                        , o = i ? i.type : null
                        , r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                    e: for (s = 0; a.length > s; s++)
                        if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                            for (n = 0; r.length > n; n++)
                                if (r[n] === a[s].element[0]) {
                                    a[s].proportions().height = 0;
                                    continue e
                                }
                            a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
                                width: a[s].element[0].offsetWidth
                                , height: a[s].element[0].offsetHeight
                            }))
                        }
                }
                , drop: function (t, i) {
                    var s = !1;
                    return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                    }), s
                }
                , dragStart: function (t, i) {
                    t.element.parentsUntil("body").bind("scroll.droppable", function () {
                        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                    })
                }
                , drag: function (t, i) {
                    t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i)
                                , r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                            r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                                return e(this).droppable("instance").options.scope === n
                            }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                        }
                    })
                }
                , dragStop: function (t, i) {
                    t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                }
            }, e.ui.droppable;
            var y = "ui-effects-"
                , b = e;
            e.effects = {
                    effect: {}
                }
                , function (e, t) {
                    function i(e, t, i) {
                        var s = d[t.type] || {};
                        return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
                    }

                    function s(i) {
                        var s = l()
                            , n = s._rgba = [];
                        return i = i.toLowerCase(), f(h, function (e, a) {
                            var o, r = a.re.exec(i)
                                , h = r && a.parse(r)
                                , l = a.space || "rgba";
                            return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                        }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
                    }

                    function n(e, t, i) {
                        return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
                    }
                    var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
                        , r = /^([\-+])=\s*(\d+\.?\d*)/
                        , h = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
                            , parse: function (e) {
                                return [e[1], e[2], e[3], e[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
                            , parse: function (e) {
                                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/
                            , parse: function (e) {
                                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/
                            , parse: function (e) {
                                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/
                            , space: "hsla"
                            , parse: function (e) {
                                return [e[1], e[2] / 100, e[3] / 100, e[4]]
                            }
                        }]
                        , l = e.Color = function (t, i, s, n) {
                            return new e.Color.fn.parse(t, i, s, n)
                        }
                        , u = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0
                                        , type: "byte"
                                    }
                                    , green: {
                                        idx: 1
                                        , type: "byte"
                                    }
                                    , blue: {
                                        idx: 2
                                        , type: "byte"
                                    }
                                }
                            }
                            , hsla: {
                                props: {
                                    hue: {
                                        idx: 0
                                        , type: "degrees"
                                    }
                                    , saturation: {
                                        idx: 1
                                        , type: "percent"
                                    }
                                    , lightness: {
                                        idx: 2
                                        , type: "percent"
                                    }
                                }
                            }
                        }
                        , d = {
                            "byte": {
                                floor: !0
                                , max: 255
                            }
                            , percent: {
                                max: 1
                            }
                            , degrees: {
                                mod: 360
                                , floor: !0
                            }
                        }
                        , c = l.support = {}
                        , p = e("<p>")[0]
                        , f = e.each;
                    p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
                        t.cache = "_" + e, t.props.alpha = {
                            idx: 3
                            , type: "percent"
                            , def: 1
                        }
                    }), l.fn = e.extend(l.prototype, {
                        parse: function (n, o, r, h) {
                            if (n === t) return this._rgba = [null, null, null, null], this;
                            (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                            var d = this
                                , c = e.type(n)
                                , p = this._rgba = [];
                            return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
                                p[t.idx] = i(n[t.idx], t)
                            }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
                                n[t.cache] && (d[t.cache] = n[t.cache].slice())
                            }) : f(u, function (t, s) {
                                var a = s.cache;
                                f(s.props, function (e, t) {
                                    if (!d[a] && s.to) {
                                        if ("alpha" === e || null == n[e]) return;
                                        d[a] = s.to(d._rgba)
                                    }
                                    d[a][t.idx] = i(n[e], t, !0)
                                }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                            }), this) : t
                        }
                        , is: function (e) {
                            var i = l(e)
                                , s = !0
                                , n = this;
                            return f(u, function (e, a) {
                                var o, r = i[a.cache];
                                return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
                                    return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                                })), s
                            }), s
                        }
                        , _space: function () {
                            var e = []
                                , t = this;
                            return f(u, function (i, s) {
                                t[s.cache] && e.push(i)
                            }), e.pop()
                        }
                        , transition: function (e, t) {
                            var s = l(e)
                                , n = s._space()
                                , a = u[n]
                                , o = 0 === this.alpha() ? l("transparent") : this
                                , r = o[a.cache] || a.to(o._rgba)
                                , h = r.slice();
                            return s = s[a.cache], f(a.props, function (e, n) {
                                var a = n.idx
                                    , o = r[a]
                                    , l = s[a]
                                    , u = d[n.type] || {};
                                null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                            }), this[n](h)
                        }
                        , blend: function (t) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice()
                                , s = i.pop()
                                , n = l(t)._rgba;
                            return l(e.map(i, function (e, t) {
                                return (1 - s) * n[t] + s * e
                            }))
                        }
                        , toRgbaString: function () {
                            var t = "rgba("
                                , i = e.map(this._rgba, function (e, t) {
                                    return null == e ? t > 2 ? 1 : 0 : e
                                });
                            return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                        }
                        , toHslaString: function () {
                            var t = "hsla("
                                , i = e.map(this.hsla(), function (e, t) {
                                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                                });
                            return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                        }
                        , toHexString: function (t) {
                            var i = this._rgba.slice()
                                , s = i.pop();
                            return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                            }).join("")
                        }
                        , toString: function () {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t, i, s = e[0] / 255
                            , n = e[1] / 255
                            , a = e[2] / 255
                            , o = e[3]
                            , r = Math.max(s, n, a)
                            , h = Math.min(s, n, a)
                            , l = r - h
                            , u = r + h
                            , d = .5 * u;
                        return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
                    }, u.hsla.from = function (e) {
                        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                        var t = e[0] / 360
                            , i = e[1]
                            , s = e[2]
                            , a = e[3]
                            , o = .5 >= s ? s * (1 + i) : s + i - s * i
                            , r = 2 * s - o;
                        return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
                    }, f(u, function (s, n) {
                        var a = n.props
                            , o = n.cache
                            , h = n.to
                            , u = n.from;
                        l.fn[s] = function (s) {
                            if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                            var n, r = e.type(s)
                                , d = "array" === r || "object" === r ? s : arguments
                                , c = this[o].slice();
                            return f(a, function (e, t) {
                                var s = d["object" === r ? e : t.idx];
                                null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                            }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                        }, f(a, function (t, i) {
                            l.fn[t] || (l.fn[t] = function (n) {
                                var a, o = e.type(n)
                                    , h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s
                                    , l = this[h]()
                                    , u = l[i.idx];
                                return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                            })
                        })
                    }), l.hook = function (t) {
                        var i = t.split(" ");
                        f(i, function (t, i) {
                            e.cssHooks[i] = {
                                set: function (t, n) {
                                    var a, o, r = "";
                                    if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                        if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                            for (o = "backgroundColor" === i ? t.parentNode : t;
                                                ("" === r || "transparent" === r) && o && o.style;) try {
                                                r = e.css(o, "backgroundColor"), o = o.parentNode
                                            } catch (h) {}
                                            n = n.blend(r && "transparent" !== r ? r : "_default")
                                        }
                                        n = n.toRgbaString()
                                    }
                                    try {
                                        t.style[i] = n
                                    } catch (h) {}
                                }
                            }, e.fx.step[i] = function (t) {
                                t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                            }
                        })
                    }, l.hook(o), e.cssHooks.borderColor = {
                        expand: function (e) {
                            var t = {};
                            return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                                t["border" + s + "Color"] = e
                            }), t
                        }
                    }, a = e.Color.names = {
                        aqua: "#00ffff"
                        , black: "#000000"
                        , blue: "#0000ff"
                        , fuchsia: "#ff00ff"
                        , gray: "#808080"
                        , green: "#008000"
                        , lime: "#00ff00"
                        , maroon: "#800000"
                        , navy: "#000080"
                        , olive: "#808000"
                        , purple: "#800080"
                        , red: "#ff0000"
                        , silver: "#c0c0c0"
                        , teal: "#008080"
                        , white: "#ffffff"
                        , yellow: "#ffff00"
                        , transparent: [null, null, null, 0]
                        , _default: "#ffffff"
                    }
                }(b)
                , function () {
                    function t(t) {
                        var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle
                            , a = {};
                        if (n && n.length && n[0] && n[n[0]])
                            for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                        else
                            for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                        return a
                    }

                    function i(t, i) {
                        var s, a, o = {};
                        for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
                        return o
                    }
                    var s = ["add", "remove", "toggle"]
                        , n = {
                            border: 1
                            , borderBottom: 1
                            , borderColor: 1
                            , borderLeft: 1
                            , borderRight: 1
                            , borderTop: 1
                            , borderWidth: 1
                            , margin: 1
                            , padding: 1
                        };
                    e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
                        e.fx.step[i] = function (e) {
                            ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
                        }
                    }), e.fn.addBack || (e.fn.addBack = function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }), e.effects.animateClass = function (n, a, o, r) {
                        var h = e.speed(a, o, r);
                        return this.queue(function () {
                            var a, o = e(this)
                                , r = o.attr("class") || ""
                                , l = h.children ? o.find("*").addBack() : o;
                            l = l.map(function () {
                                var i = e(this);
                                return {
                                    el: i
                                    , start: t(this)
                                }
                            }), a = function () {
                                e.each(s, function (e, t) {
                                    n[t] && o[t + "Class"](n[t])
                                })
                            }, a(), l = l.map(function () {
                                return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                            }), o.attr("class", r), l = l.map(function () {
                                var t = this
                                    , i = e.Deferred()
                                    , s = e.extend({}, h, {
                                        queue: !1
                                        , complete: function () {
                                            i.resolve(t)
                                        }
                                    });
                                return this.el.animate(this.diff, s), i.promise()
                            }), e.when.apply(e, l.get()).done(function () {
                                a(), e.each(arguments, function () {
                                    var t = this.el;
                                    e.each(this.diff, function (e) {
                                        t.css(e, "")
                                    })
                                }), h.complete.call(o[0])
                            })
                        })
                    }, e.fn.extend({
                        addClass: function (t) {
                            return function (i, s, n, a) {
                                return s ? e.effects.animateClass.call(this, {
                                    add: i
                                }, s, n, a) : t.apply(this, arguments)
                            }
                        }(e.fn.addClass)
                        , removeClass: function (t) {
                            return function (i, s, n, a) {
                                return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                    remove: i
                                }, s, n, a) : t.apply(this, arguments)
                            }
                        }(e.fn.removeClass)
                        , toggleClass: function (t) {
                            return function (i, s, n, a, o) {
                                return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                                    add: i
                                } : {
                                    remove: i
                                }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                    toggle: i
                                }, s, n, a)
                            }
                        }(e.fn.toggleClass)
                        , switchClass: function (t, i, s, n, a) {
                            return e.effects.animateClass.call(this, {
                                add: i
                                , remove: t
                            }, s, n, a)
                        }
                    })
                }()
                , function () {
                    function t(t, i, s, n) {
                        return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                            effect: t
                        }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
                    }

                    function i(t) {
                        return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                    }
                    e.extend(e.effects, {
                        version: "1.11.4"
                        , save: function (e, t) {
                            for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]])
                        }
                        , restore: function (e, t) {
                            var i, s;
                            for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i))
                        }
                        , setMode: function (e, t) {
                            return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                        }
                        , getBaseline: function (e, t) {
                            var i, s;
                            switch (e[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = e[0] / t.height
                            }
                            switch (e[1]) {
                            case "left":
                                s = 0;
                                break;
                            case "center":
                                s = .5;
                                break;
                            case "right":
                                s = 1;
                                break;
                            default:
                                s = e[1] / t.width
                            }
                            return {
                                x: s
                                , y: i
                            }
                        }
                        , createWrapper: function (t) {
                            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                            var i = {
                                    width: t.outerWidth(!0)
                                    , height: t.outerHeight(!0)
                                    , "float": t.css("float")
                                }
                                , s = e("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%"
                                    , background: "transparent"
                                    , border: "none"
                                    , margin: 0
                                    , padding: 0
                                })
                                , n = {
                                    width: t.width()
                                    , height: t.height()
                                }
                                , a = document.activeElement;
                            try {
                                a.id
                            } catch (o) {
                                a = document.body
                            }
                            return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                                position: "relative"
                            }), t.css({
                                position: "relative"
                            })) : (e.extend(i, {
                                position: t.css("position")
                                , zIndex: t.css("z-index")
                            }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                                i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                            }), t.css({
                                position: "relative"
                                , top: 0
                                , left: 0
                                , right: "auto"
                                , bottom: "auto"
                            })), t.css(n), s.css(i).show()
                        }
                        , removeWrapper: function (t) {
                            var i = document.activeElement;
                            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                        }
                        , setTransition: function (t, i, s, n) {
                            return n = n || {}, e.each(i, function (e, i) {
                                var a = t.cssUnit(i);
                                a[0] > 0 && (n[i] = a[0] * s + a[1])
                            }), n
                        }
                    }), e.fn.extend({
                        effect: function () {
                            function i(t) {
                                function i() {
                                    e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                                }
                                var n = e(this)
                                    , a = s.complete
                                    , r = s.mode;
                                (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                            }
                            var s = t.apply(this, arguments)
                                , n = s.mode
                                , a = s.queue
                                , o = e.effects.effect[s.effect];
                            return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
                                s.complete && s.complete.call(this)
                            }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
                        }
                        , show: function (e) {
                            return function (s) {
                                if (i(s)) return e.apply(this, arguments);
                                var n = t.apply(this, arguments);
                                return n.mode = "show", this.effect.call(this, n)
                            }
                        }(e.fn.show)
                        , hide: function (e) {
                            return function (s) {
                                if (i(s)) return e.apply(this, arguments);
                                var n = t.apply(this, arguments);
                                return n.mode = "hide", this.effect.call(this, n)
                            }
                        }(e.fn.hide)
                        , toggle: function (e) {
                            return function (s) {
                                if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
                                var n = t.apply(this, arguments);
                                return n.mode = "toggle", this.effect.call(this, n)
                            }
                        }(e.fn.toggle)
                        , cssUnit: function (t) {
                            var i = this.css(t)
                                , s = [];
                            return e.each(["em", "px", "%", "pt"], function (e, t) {
                                i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                            }), s
                        }
                    })
                }()
                , function () {
                    var t = {};
                    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
                        t[i] = function (t) {
                            return Math.pow(t, e + 2)
                        }
                    }), e.extend(t, {
                        Sine: function (e) {
                            return 1 - Math.cos(e * Math.PI / 2)
                        }
                        , Circ: function (e) {
                            return 1 - Math.sqrt(1 - e * e)
                        }
                        , Elastic: function (e) {
                            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                        }
                        , Back: function (e) {
                            return e * e * (3 * e - 2)
                        }
                        , Bounce: function (e) {
                            for (var t, i = 4;
                                ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                        }
                    }), e.each(t, function (t, i) {
                        e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                            return 1 - i(1 - e)
                        }, e.easing["easeInOut" + t] = function (e) {
                            return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                        }
                    })
                }(), e.effects, e.effects.effect.blind = function (t, i) {
                    var s, n, a, o = e(this)
                        , r = /up|down|vertical/
                        , h = /up|left|vertical|horizontal/
                        , l = ["position", "top", "bottom", "left", "right", "height", "width"]
                        , u = e.effects.setMode(o, t.mode || "hide")
                        , d = t.direction || "up"
                        , c = r.test(d)
                        , p = c ? "height" : "width"
                        , f = c ? "top" : "left"
                        , m = h.test(d)
                        , g = {}
                        , v = "show" === u;
                    o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({
                        overflow: "hidden"
                    }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
                        position: "absolute"
                    }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
                        duration: t.duration
                        , easing: t.easing
                        , queue: !1
                        , complete: function () {
                            "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i()
                        }
                    })
                }, e.effects.effect.bounce = function (t, i) {
                    var s, n, a, o = e(this)
                        , r = ["position", "top", "bottom", "left", "right", "height", "width"]
                        , h = e.effects.setMode(o, t.mode || "effect")
                        , l = "hide" === h
                        , u = "show" === h
                        , d = t.direction || "up"
                        , c = t.distance
                        , p = t.times || 5
                        , f = 2 * p + (u || l ? 1 : 0)
                        , m = t.duration / f
                        , g = t.easing
                        , v = "up" === d || "down" === d ? "top" : "left"
                        , y = "up" === d || "left" === d
                        , b = o.queue()
                        , _ = b.length;
                    for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {
                            opacity: 1
                        }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
                    l && (n = {
                        opacity: 0
                    }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
                        l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
                    }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
                }, e.effects.effect.clip = function (t, i) {
                    var s, n, a, o = e(this)
                        , r = ["position", "top", "bottom", "left", "right", "height", "width"]
                        , h = e.effects.setMode(o, t.mode || "hide")
                        , l = "show" === h
                        , u = t.direction || "vertical"
                        , d = "vertical" === u
                        , c = d ? "height" : "width"
                        , p = d ? "top" : "left"
                        , f = {};
                    e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({
                        overflow: "hidden"
                    }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: function () {
                            l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
                        }
                    })
                }, e.effects.effect.drop = function (t, i) {
                    var s, n = e(this)
                        , a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"]
                        , o = e.effects.setMode(n, t.mode || "hide")
                        , r = "show" === o
                        , h = t.direction || "left"
                        , l = "up" === h || "down" === h ? "top" : "left"
                        , u = "up" === h || "left" === h ? "pos" : "neg"
                        , d = {
                            opacity: r ? 1 : 0
                        };
                    e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: function () {
                            "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
                        }
                    })
                }, e.effects.effect.explode = function (t, i) {
                    function s() {
                        b.push(this), b.length === d * c && n()
                    }

                    function n() {
                        p.css({
                            visibility: "visible"
                        }), e(b).remove(), m || p.hide(), i()
                    }
                    var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3
                        , c = d
                        , p = e(this)
                        , f = e.effects.setMode(p, t.mode || "hide")
                        , m = "show" === f
                        , g = p.show().css("visibility", "hidden").offset()
                        , v = Math.ceil(p.outerWidth() / c)
                        , y = Math.ceil(p.outerHeight() / d)
                        , b = [];
                    for (a = 0; d > a; a++)
                        for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                            position: "absolute"
                            , visibility: "visible"
                            , left: -o * v
                            , top: -a * y
                        }).parent().addClass("ui-effects-explode").css({
                            position: "absolute"
                            , overflow: "hidden"
                            , width: v
                            , height: y
                            , left: r + (m ? l * v : 0)
                            , top: h + (m ? u * y : 0)
                            , opacity: m ? 0 : 1
                        }).animate({
                            left: r + (m ? 0 : l * v)
                            , top: h + (m ? 0 : u * y)
                            , opacity: m ? 1 : 0
                        }, t.duration || 500, t.easing, s)
                }, e.effects.effect.fade = function (t, i) {
                    var s = e(this)
                        , n = e.effects.setMode(s, t.mode || "toggle");
                    s.animate({
                        opacity: n
                    }, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: i
                    })
                }, e.effects.effect.fold = function (t, i) {
                    var s, n, a = e(this)
                        , o = ["position", "top", "bottom", "left", "right", "height", "width"]
                        , r = e.effects.setMode(a, t.mode || "hide")
                        , h = "show" === r
                        , l = "hide" === r
                        , u = t.size || 15
                        , d = /([0-9]+)%/.exec(u)
                        , c = !!t.horizFirst
                        , p = h !== c
                        , f = p ? ["width", "height"] : ["height", "width"]
                        , m = t.duration / 2
                        , g = {}
                        , v = {};
                    e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
                        overflow: "hidden"
                    }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
                        height: 0
                        , width: u
                    } : {
                        height: u
                        , width: 0
                    }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
                        l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
                    })
                }, e.effects.effect.highlight = function (t, i) {
                    var s = e(this)
                        , n = ["backgroundImage", "backgroundColor", "opacity"]
                        , a = e.effects.setMode(s, t.mode || "show")
                        , o = {
                            backgroundColor: s.css("backgroundColor")
                        };
                    "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
                        backgroundImage: "none"
                        , backgroundColor: t.color || "#ffff99"
                    }).animate(o, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: function () {
                            "hide" === a && s.hide(), e.effects.restore(s, n), i()
                        }
                    })
                }, e.effects.effect.size = function (t, i) {
                    var s, n, a, o = e(this)
                        , r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"]
                        , h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"]
                        , l = ["width", "height", "overflow"]
                        , u = ["fontSize"]
                        , d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"]
                        , c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"]
                        , p = e.effects.setMode(o, t.mode || "effect")
                        , f = t.restore || "effect" !== p
                        , m = t.scale || "both"
                        , g = t.origin || ["middle", "center"]
                        , v = o.css("position")
                        , y = f ? r : h
                        , b = {
                            height: 0
                            , width: 0
                            , outerHeight: 0
                            , outerWidth: 0
                        };
                    "show" === p && o.show(), s = {
                        height: o.height()
                        , width: o.width()
                        , outerHeight: o.outerHeight()
                        , outerWidth: o.outerWidth()
                    }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
                        from: {
                            y: o.from.height / s.height
                            , x: o.from.width / s.width
                        }
                        , to: {
                            y: o.to.height / s.height
                            , x: o.to.width / s.width
                        }
                    }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
                        var i = e(this)
                            , s = {
                                height: i.height()
                                , width: i.width()
                                , outerHeight: i.outerHeight()
                                , outerWidth: i.outerWidth()
                            };
                        f && e.effects.save(i, l), i.from = {
                            height: s.height * a.from.y
                            , width: s.width * a.from.x
                            , outerHeight: s.outerHeight * a.from.y
                            , outerWidth: s.outerWidth * a.from.x
                        }, i.to = {
                            height: s.height * a.to.y
                            , width: s.width * a.to.x
                            , outerHeight: s.height * a.to.y
                            , outerWidth: s.width * a.to.x
                        }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                            f && e.effects.restore(i, l)
                        })
                    })), o.animate(o.to, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: function () {
                            0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
                                position: "relative"
                                , top: o.to.top
                                , left: o.to.left
                            }) : e.each(["top", "left"], function (e, t) {
                                o.css(t, function (t, i) {
                                    var s = parseInt(i, 10)
                                        , n = e ? o.to.left : o.to.top;
                                    return "auto" === i ? n + "px" : s + n + "px"
                                })
                            })), e.effects.removeWrapper(o), i()
                        }
                    })
                }, e.effects.effect.scale = function (t, i) {
                    var s = e(this)
                        , n = e.extend(!0, {}, t)
                        , a = e.effects.setMode(s, t.mode || "effect")
                        , o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100)
                        , r = t.direction || "both"
                        , h = t.origin
                        , l = {
                            height: s.height()
                            , width: s.width()
                            , outerHeight: s.outerHeight()
                            , outerWidth: s.outerWidth()
                        }
                        , u = {
                            y: "horizontal" !== r ? o / 100 : 1
                            , x: "vertical" !== r ? o / 100 : 1
                        };
                    n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
                        height: 0
                        , width: 0
                        , outerHeight: 0
                        , outerWidth: 0
                    } : l), n.to = {
                        height: l.height * u.y
                        , width: l.width * u.x
                        , outerHeight: l.outerHeight * u.y
                        , outerWidth: l.outerWidth * u.x
                    }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
                }, e.effects.effect.puff = function (t, i) {
                    var s = e(this)
                        , n = e.effects.setMode(s, t.mode || "hide")
                        , a = "hide" === n
                        , o = parseInt(t.percent, 10) || 150
                        , r = o / 100
                        , h = {
                            height: s.height()
                            , width: s.width()
                            , outerHeight: s.outerHeight()
                            , outerWidth: s.outerWidth()
                        };
                    e.extend(t, {
                        effect: "scale"
                        , queue: !1
                        , fade: !0
                        , mode: n
                        , complete: i
                        , percent: a ? o : 100
                        , from: a ? h : {
                            height: h.height * r
                            , width: h.width * r
                            , outerHeight: h.outerHeight * r
                            , outerWidth: h.outerWidth * r
                        }
                    }), s.effect(t)
                }, e.effects.effect.pulsate = function (t, i) {
                    var s, n = e(this)
                        , a = e.effects.setMode(n, t.mode || "show")
                        , o = "show" === a
                        , r = "hide" === a
                        , h = o || "hide" === a
                        , l = 2 * (t.times || 5) + (h ? 1 : 0)
                        , u = t.duration / l
                        , d = 0
                        , c = n.queue()
                        , p = c.length;
                    for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({
                        opacity: d
                    }, u, t.easing), d = 1 - d;
                    n.animate({
                        opacity: d
                    }, u, t.easing), n.queue(function () {
                        r && n.hide(), i()
                    }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
                }, e.effects.effect.shake = function (t, i) {
                    var s, n = e(this)
                        , a = ["position", "top", "bottom", "left", "right", "height", "width"]
                        , o = e.effects.setMode(n, t.mode || "effect")
                        , r = t.direction || "left"
                        , h = t.distance || 20
                        , l = t.times || 3
                        , u = 2 * l + 1
                        , d = Math.round(t.duration / u)
                        , c = "up" === r || "down" === r ? "top" : "left"
                        , p = "up" === r || "left" === r
                        , f = {}
                        , m = {}
                        , g = {}
                        , v = n.queue()
                        , y = v.length;
                    for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
                    n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
                        "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
                    }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
                }, e.effects.effect.slide = function (t, i) {
                    var s, n = e(this)
                        , a = ["position", "top", "bottom", "left", "right", "width", "height"]
                        , o = e.effects.setMode(n, t.mode || "show")
                        , r = "show" === o
                        , h = t.direction || "left"
                        , l = "up" === h || "down" === h ? "top" : "left"
                        , u = "up" === h || "left" === h
                        , d = {};
                    e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
                        overflow: "hidden"
                    }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
                        queue: !1
                        , duration: t.duration
                        , easing: t.easing
                        , complete: function () {
                            "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
                        }
                    })
                }, e.effects.effect.transfer = function (t, i) {
                    var s = e(this)
                        , n = e(t.to)
                        , a = "fixed" === n.css("position")
                        , o = e("body")
                        , r = a ? o.scrollTop() : 0
                        , h = a ? o.scrollLeft() : 0
                        , l = n.offset()
                        , u = {
                            top: l.top - r
                            , left: l.left - h
                            , height: n.innerHeight()
                            , width: n.innerWidth()
                        }
                        , d = s.offset()
                        , c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                            top: d.top - r
                            , left: d.left - h
                            , height: s.innerHeight()
                            , width: s.innerWidth()
                            , position: a ? "fixed" : "absolute"
                        }).animate(u, t.duration, t.easing, function () {
                            c.remove(), i()
                        })
                }, e.widget("ui.progressbar", {
                    version: "1.11.4"
                    , options: {
                        max: 100
                        , value: 0
                        , change: null
                        , complete: null
                    }
                    , min: 0
                    , _create: function () {
                        this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                            role: "progressbar"
                            , "aria-valuemin": this.min
                        }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
                    }
                    , _destroy: function () {
                        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                    }
                    , value: function (e) {
                        return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
                    }
                    , _constrainedValue: function (e) {
                        return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
                    }
                    , _setOptions: function (e) {
                        var t = e.value;
                        delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
                    }
                    , _setOption: function (e, t) {
                        "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
                    }
                    , _percentage: function () {
                        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                    }
                    , _refreshValue: function () {
                        var t = this.options.value
                            , i = this._percentage();
                        this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                            "aria-valuemax": this.options.max
                            , "aria-valuenow": t
                        }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
                    }
                }), e.widget("ui.selectable", e.ui.mouse, {
                    version: "1.11.4"
                    , options: {
                        appendTo: "body"
                        , autoRefresh: !0
                        , distance: 0
                        , filter: "*"
                        , tolerance: "touch"
                        , selected: null
                        , selecting: null
                        , start: null
                        , stop: null
                        , unselected: null
                        , unselecting: null
                    }
                    , _create: function () {
                        var t, i = this;
                        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                            t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
                                var t = e(this)
                                    , i = t.offset();
                                e.data(this, "selectable-item", {
                                    element: this
                                    , $element: t
                                    , left: i.left
                                    , top: i.top
                                    , right: i.left + t.outerWidth()
                                    , bottom: i.top + t.outerHeight()
                                    , startselected: !1
                                    , selected: t.hasClass("ui-selected")
                                    , selecting: t.hasClass("ui-selecting")
                                    , unselecting: t.hasClass("ui-unselecting")
                                })
                            })
                        }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
                    }
                    , _destroy: function () {
                        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                    }
                    , _mouseStart: function (t) {
                        var i = this
                            , s = this.options;
                        this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                            left: t.pageX
                            , top: t.pageY
                            , width: 0
                            , height: 0
                        }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                            var s = e.data(this, "selectable-item");
                            s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
                                unselecting: s.element
                            }))
                        }), e(t.target).parents().addBack().each(function () {
                            var s, n = e.data(this, "selectable-item");
                            return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                                selecting: n.element
                            }) : i._trigger("unselecting", t, {
                                unselecting: n.element
                            }), !1) : void 0
                        }))
                    }
                    , _mouseDrag: function (t) {
                        if (this.dragged = !0, !this.options.disabled) {
                            var i, s = this
                                , n = this.options
                                , a = this.opos[0]
                                , o = this.opos[1]
                                , r = t.pageX
                                , h = t.pageY;
                            return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
                                left: a
                                , top: o
                                , width: r - a
                                , height: h - o
                            }), this.selectees.each(function () {
                                var i = e.data(this, "selectable-item")
                                    , l = !1;
                                i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                                    selecting: i.element
                                }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
                                    unselecting: i.element
                                }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                                    unselecting: i.element
                                })))))
                            }), !1
                        }
                    }
                    , _mouseStop: function (t) {
                        var i = this;
                        return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                            var s = e.data(this, "selectable-item");
                            s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
                                unselected: s.element
                            })
                        }), e(".ui-selecting", this.element[0]).each(function () {
                            var s = e.data(this, "selectable-item");
                            s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
                                selected: s.element
                            })
                        }), this._trigger("stop", t), this.helper.remove(), !1
                    }
                }), e.widget("ui.selectmenu", {
                    version: "1.11.4"
                    , defaultElement: "<select>"
                    , options: {
                        appendTo: null
                        , disabled: null
                        , icons: {
                            button: "ui-icon-triangle-1-s"
                        }
                        , position: {
                            my: "left top"
                            , at: "left bottom"
                            , collision: "none"
                        }
                        , width: null
                        , change: null
                        , close: null
                        , focus: null
                        , open: null
                        , select: null
                    }
                    , _create: function () {
                        var e = this.element.uniqueId().attr("id");
                        this.ids = {
                            element: e
                            , button: e + "-button"
                            , menu: e + "-menu"
                        }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                    }
                    , _drawButton: function () {
                        var t = this;
                        this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                            click: function (e) {
                                this.button.focus(), e.preventDefault()
                            }
                        }), this.element.hide(), this.button = e("<span>", {
                            "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all"
                            , tabindex: this.options.disabled ? -1 : 0
                            , id: this.ids.button
                            , role: "combobox"
                            , "aria-expanded": "false"
                            , "aria-autocomplete": "list"
                            , "aria-owns": this.ids.menu
                            , "aria-haspopup": "true"
                        }).insertAfter(this.element), e("<span>", {
                            "class": "ui-icon " + this.options.icons.button
                        }).prependTo(this.button), this.buttonText = e("<span>", {
                            "class": "ui-selectmenu-text"
                        }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                            t.menuItems || t._refreshMenu()
                        }), this._hoverable(this.button), this._focusable(this.button)
                    }
                    , _drawMenu: function () {
                        var t = this;
                        this.menu = e("<ul>", {
                            "aria-hidden": "true"
                            , "aria-labelledby": this.ids.button
                            , id: this.ids.menu
                        }), this.menuWrap = e("<div>", {
                            "class": "ui-selectmenu-menu ui-front"
                        }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                            role: "listbox"
                            , select: function (e, i) {
                                e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                            }
                            , focus: function (e, i) {
                                var s = i.item.data("ui-selectmenu-item");
                                null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {
                                    item: s
                                }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                            }
                        }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                            return !1
                        }, this.menuInstance._isDivider = function () {
                            return !1
                        }
                    }
                    , refresh: function () {
                        this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
                    }
                    , _refreshMenu: function () {
                        this.menu.empty();
                        var e, t = this.element.find("option");
                        t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                    }
                    , open: function (e) {
                        this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
                    }
                    , _position: function () {
                        this.menuWrap.position(e.extend({
                            of: this.button
                        }, this.options.position))
                    }
                    , close: function (e) {
                        this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
                    }
                    , widget: function () {
                        return this.button
                    }
                    , menuWidget: function () {
                        return this.menu
                    }
                    , _renderMenu: function (t, i) {
                        var s = this
                            , n = "";
                        e.each(i, function (i, a) {
                            a.optgroup !== n && (e("<li>", {
                                "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")
                                , text: a.optgroup
                            }).appendTo(t), n = a.optgroup), s._renderItemData(t, a)
                        })
                    }
                    , _renderItemData: function (e, t) {
                        return this._renderItem(e, t).data("ui-selectmenu-item", t)
                    }
                    , _renderItem: function (t, i) {
                        var s = e("<li>");
                        return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t)
                    }
                    , _setText: function (e, t) {
                        t ? e.text(t) : e.html("&#160;")
                    }
                    , _move: function (e, t) {
                        var i, s, n = ".ui-menu-item";
                        this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s)
                    }
                    , _getSelectedItem: function () {
                        return this.menuItems.eq(this.element[0].selectedIndex)
                    }
                    , _toggle: function (e) {
                        this[this.isOpen ? "close" : "open"](e)
                    }
                    , _setSelection: function () {
                        var e;
                        this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
                    }
                    , _documentClick: {
                        mousedown: function (t) {
                            this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                        }
                    }
                    , _buttonEvents: {
                        mousedown: function () {
                            var e;
                            window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
                        }
                        , click: function (e) {
                            this._setSelection(), this._toggle(e)
                        }
                        , keydown: function (t) {
                            var i = !0;
                            switch (t.keyCode) {
                            case e.ui.keyCode.TAB:
                            case e.ui.keyCode.ESCAPE:
                                this.close(t), i = !1;
                                break;
                            case e.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(t);
                                break;
                            case e.ui.keyCode.UP:
                                t.altKey ? this._toggle(t) : this._move("prev", t);
                                break;
                            case e.ui.keyCode.DOWN:
                                t.altKey ? this._toggle(t) : this._move("next", t);
                                break;
                            case e.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                break;
                            case e.ui.keyCode.LEFT:
                                this._move("prev", t);
                                break;
                            case e.ui.keyCode.RIGHT:
                                this._move("next", t);
                                break;
                            case e.ui.keyCode.HOME:
                            case e.ui.keyCode.PAGE_UP:
                                this._move("first", t);
                                break;
                            case e.ui.keyCode.END:
                            case e.ui.keyCode.PAGE_DOWN:
                                this._move("last", t);
                                break;
                            default:
                                this.menu.trigger(t), i = !1
                            }
                            i && t.preventDefault()
                        }
                    }
                    , _selectFocusedItem: function (e) {
                        var t = this.menuItems.eq(this.focusIndex);
                        t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
                    }
                    , _select: function (e, t) {
                        var i = this.element[0].selectedIndex;
                        this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
                            item: e
                        }), e.index !== i && this._trigger("change", t, {
                            item: e
                        }), this.close(t)
                    }
                    , _setAria: function (e) {
                        var t = this.menuItems.eq(e.index).attr("id");
                        this.button.attr({
                            "aria-labelledby": t
                            , "aria-activedescendant": t
                        }), this.menu.attr("aria-activedescendant", t)
                    }
                    , _setOption: function (e, t) {
                        "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
                    }
                    , _appendTo: function () {
                        var t = this.options.appendTo;
                        return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
                    }
                    , _toggleAttr: function () {
                        this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                    }
                    , _resizeButton: function () {
                        var e = this.options.width;
                        e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
                    }
                    , _resizeMenu: function () {
                        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                    }
                    , _getCreateOptions: function () {
                        return {
                            disabled: this.element.prop("disabled")
                        }
                    }
                    , _parseOptions: function (t) {
                        var i = [];
                        t.each(function (t, s) {
                            var n = e(s)
                                , a = n.parent("optgroup");
                            i.push({
                                element: n
                                , index: t
                                , value: n.val()
                                , label: n.text()
                                , optgroup: a.attr("label") || ""
                                , disabled: a.prop("disabled") || n.prop("disabled")
                            })
                        }), this.items = i
                    }
                    , _destroy: function () {
                        this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
                    }
                }), e.widget("ui.slider", e.ui.mouse, {
                    version: "1.11.4"
                    , widgetEventPrefix: "slide"
                    , options: {
                        animate: !1
                        , distance: 0
                        , max: 100
                        , min: 0
                        , orientation: "horizontal"
                        , range: !1
                        , step: 1
                        , value: 0
                        , values: null
                        , change: null
                        , slide: null
                        , start: null
                        , stop: null
                    }
                    , numPages: 5
                    , _create: function () {
                        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                    }
                    , _refresh: function () {
                        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                    }
                    , _createHandles: function () {
                        var t, i, s = this.options
                            , n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all")
                            , a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>"
                            , o = [];
                        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
                        this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                            e(this).data("ui-slider-handle-index", t)
                        })
                    }
                    , _createRange: function () {
                        var t = this.options
                            , i = "";
                        t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                            left: ""
                            , bottom: ""
                        }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
                    }
                    , _setupEvents: function () {
                        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                    }
                    , _destroy: function () {
                        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                    }
                    , _mouseCapture: function (t) {
                        var i, s, n, a, o, r, h, l, u = this
                            , d = this.options;
                        return d.disabled ? !1 : (this.elementSize = {
                            width: this.element.outerWidth()
                            , height: this.element.outerHeight()
                        }, this.elementOffset = this.element.offset(), i = {
                            x: t.pageX
                            , y: t.pageY
                        }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                            var i = Math.abs(s - u.values(t));
                            (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
                        }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                            left: 0
                            , top: 0
                        } : {
                            left: t.pageX - h.left - a.width() / 2
                            , top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
                        }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
                    }
                    , _mouseStart: function () {
                        return !0
                    }
                    , _mouseDrag: function (e) {
                        var t = {
                                x: e.pageX
                                , y: e.pageY
                            }
                            , i = this._normValueFromMouse(t);
                        return this._slide(e, this._handleIndex, i), !1
                    }
                    , _mouseStop: function (e) {
                        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                    }
                    , _detectOrientation: function () {
                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                    }
                    , _normValueFromMouse: function (e) {
                        var t, i, s, n, a;
                        return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
                    }
                    , _start: function (e, t) {
                        var i = {
                            handle: this.handles[t]
                            , value: this.value()
                        };
                        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
                    }
                    , _slide: function (e, t, i) {
                        var s, n, a;
                        this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                            handle: this.handles[t]
                            , value: i
                            , values: n
                        }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                            handle: this.handles[t]
                            , value: i
                        }), a !== !1 && this.value(i))
                    }
                    , _stop: function (e, t) {
                        var i = {
                            handle: this.handles[t]
                            , value: this.value()
                        };
                        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
                    }
                    , _change: function (e, t) {
                        if (!this._keySliding && !this._mouseSliding) {
                            var i = {
                                handle: this.handles[t]
                                , value: this.value()
                            };
                            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
                        }
                    }
                    , value: function (e) {
                        return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
                    }
                    , values: function (t, i) {
                        var s, n, a;
                        if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
                        if (!arguments.length) return this._values();
                        if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                        for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                        this._refreshValue()
                    }
                    , _setOption: function (t, i) {
                        var s, n = 0;
                        switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                        }
                    }
                    , _value: function () {
                        var e = this.options.value;
                        return e = this._trimAlignValue(e)
                    }
                    , _values: function (e) {
                        var t, i, s;
                        if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                        if (this.options.values && this.options.values.length) {
                            for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                            return i
                        }
                        return []
                    }
                    , _trimAlignValue: function (e) {
                        if (this._valueMin() >= e) return this._valueMin();
                        if (e >= this._valueMax()) return this._valueMax();
                        var t = this.options.step > 0 ? this.options.step : 1
                            , i = (e - this._valueMin()) % t
                            , s = e - i;
                        return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
                    }
                    , _calculateNewMax: function () {
                        var e = this.options.max
                            , t = this._valueMin()
                            , i = this.options.step
                            , s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
                        e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
                    }
                    , _precision: function () {
                        var e = this._precisionOf(this.options.step);
                        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
                    }
                    , _precisionOf: function (e) {
                        var t = "" + e
                            , i = t.indexOf(".");
                        return -1 === i ? 0 : t.length - i - 1
                    }
                    , _valueMin: function () {
                        return this.options.min
                    }
                    , _valueMax: function () {
                        return this.max
                    }
                    , _refreshValue: function () {
                        var t, i, s, n, a, o = this.options.range
                            , r = this.options
                            , h = this
                            , l = this._animateOff ? !1 : r.animate
                            , u = {};
                        this.options.values && this.options.values.length ? this.handles.each(function (s) {
                            i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                                left: i + "%"
                            }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                                width: i - t + "%"
                            }, {
                                queue: !1
                                , duration: r.animate
                            })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                                bottom: i + "%"
                            }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                                height: i - t + "%"
                            }, {
                                queue: !1
                                , duration: r.animate
                            }))), t = i
                        }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            width: i + "%"
                        }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, {
                            queue: !1
                            , duration: r.animate
                        }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                            height: i + "%"
                        }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, {
                            queue: !1
                            , duration: r.animate
                        }))
                    }
                    , _handleEvents: {
                        keydown: function (t) {
                            var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                            switch (t.keyCode) {
                            case e.ui.keyCode.HOME:
                            case e.ui.keyCode.END:
                            case e.ui.keyCode.PAGE_UP:
                            case e.ui.keyCode.PAGE_DOWN:
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                            }
                            switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                            case e.ui.keyCode.HOME:
                                n = this._valueMin();
                                break;
                            case e.ui.keyCode.END:
                                n = this._valueMax();
                                break;
                            case e.ui.keyCode.PAGE_UP:
                                n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.PAGE_DOWN:
                                n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.RIGHT:
                                if (s === this._valueMax()) return;
                                n = this._trimAlignValue(s + a);
                                break;
                            case e.ui.keyCode.DOWN:
                            case e.ui.keyCode.LEFT:
                                if (s === this._valueMin()) return;
                                n = this._trimAlignValue(s - a)
                            }
                            this._slide(t, o, n)
                        }
                        , keyup: function (t) {
                            var i = e(t.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
                        }
                    }
                }), e.widget("ui.sortable", e.ui.mouse, {
                    version: "1.11.4"
                    , widgetEventPrefix: "sort"
                    , ready: !1
                    , options: {
                        appendTo: "parent"
                        , axis: !1
                        , connectWith: !1
                        , containment: !1
                        , cursor: "auto"
                        , cursorAt: !1
                        , dropOnEmpty: !0
                        , forcePlaceholderSize: !1
                        , forceHelperSize: !1
                        , grid: !1
                        , handle: !1
                        , helper: "original"
                        , items: "> *"
                        , opacity: !1
                        , placeholder: !1
                        , revert: !1
                        , scroll: !0
                        , scrollSensitivity: 20
                        , scrollSpeed: 20
                        , scope: "default"
                        , tolerance: "intersect"
                        , zIndex: 1e3
                        , activate: null
                        , beforeStop: null
                        , change: null
                        , deactivate: null
                        , out: null
                        , over: null
                        , receive: null
                        , remove: null
                        , sort: null
                        , start: null
                        , stop: null
                        , update: null
                    }
                    , _isOverAxis: function (e, t, i) {
                        return e >= t && t + i > e
                    }
                    , _isFloating: function (e) {
                        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
                    }
                    , _create: function () {
                        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                    }
                    , _setOption: function (e, t) {
                        this._super(e, t), "handle" === e && this._setHandleClassName()
                    }
                    , _setHandleClassName: function () {
                        this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
                            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                        })
                    }
                    , _destroy: function () {
                        this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                        for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                        return this
                    }
                    , _mouseCapture: function (t, i) {
                        var s = null
                            , n = !1
                            , a = this;
                        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                            return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
                        }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
                            this === t.target && (n = !0)
                        }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
                    }
                    , _mouseStart: function (t, i, s) {
                        var n, a, o = this.options;
                        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                                top: this.offset.top - this.margins.top
                                , left: this.offset.left - this.margins.left
                            }, e.extend(this.offset, {
                                click: {
                                    left: t.pageX - this.offset.left
                                    , top: t.pageY - this.offset.top
                                }
                                , parent: this._getParentOffset()
                                , relative: this._getRelativeOffset()
                            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                                prev: this.currentItem.prev()[0]
                                , parent: this.currentItem.parent()[0]
                            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                            for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                        return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                    }
                    , _mouseDrag: function (t) {
                        var i, s, n, a, o = this.options
                            , r = !1;
                        for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                            if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                                this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                                break
                            }
                        return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                    }
                    , _mouseStop: function (t, i) {
                        if (t) {
                            if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                                var s = this
                                    , n = this.placeholder.offset()
                                    , a = this.options.axis
                                    , o = {};
                                a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                                    s._clear(t)
                                })
                            } else this._clear(t, i);
                            return !1
                        }
                    }
                    , cancel: function () {
                        if (this.dragging) {
                            this._mouseUp({
                                target: null
                            }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                            for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                        }
                        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                            helper: null
                            , dragging: !1
                            , reverting: !1
                            , _noFinalSort: null
                        }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
                    }
                    , serialize: function (t) {
                        var i = this._getItemsAsjQuery(t && t.connected)
                            , s = [];
                        return t = t || {}, e(i).each(function () {
                            var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                            i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                        }), !s.length && t.key && s.push(t.key + "="), s.join("&")
                    }
                    , toArray: function (t) {
                        var i = this._getItemsAsjQuery(t && t.connected)
                            , s = [];
                        return t = t || {}, i.each(function () {
                            s.push(e(t.item || this).attr(t.attribute || "id") || "")
                        }), s
                    }
                    , _intersectsWith: function (e) {
                        var t = this.positionAbs.left
                            , i = t + this.helperProportions.width
                            , s = this.positionAbs.top
                            , n = s + this.helperProportions.height
                            , a = e.left
                            , o = a + e.width
                            , r = e.top
                            , h = r + e.height
                            , l = this.offset.click.top
                            , u = this.offset.click.left
                            , d = "x" === this.options.axis || s + l > r && h > s + l
                            , c = "y" === this.options.axis || t + u > a && o > t + u
                            , p = d && c;
                        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
                    }
                    , _intersectsWithPointer: function (e) {
                        var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height)
                            , i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width)
                            , s = t && i
                            , n = this._getDragVerticalDirection()
                            , a = this._getDragHorizontalDirection();
                        return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
                    }
                    , _intersectsWithSides: function (e) {
                        var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height)
                            , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width)
                            , s = this._getDragVerticalDirection()
                            , n = this._getDragHorizontalDirection();
                        return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
                    }
                    , _getDragVerticalDirection: function () {
                        var e = this.positionAbs.top - this.lastPositionAbs.top;
                        return 0 !== e && (e > 0 ? "down" : "up")
                    }
                    , _getDragHorizontalDirection: function () {
                        var e = this.positionAbs.left - this.lastPositionAbs.left;
                        return 0 !== e && (e > 0 ? "right" : "left")
                    }
                    , refresh: function (e) {
                        return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
                    }
                    , _connectWith: function () {
                        var e = this.options;
                        return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
                    }
                    , _getItemsAsjQuery: function (t) {
                        function i() {
                            r.push(this)
                        }
                        var s, n, a, o, r = []
                            , h = []
                            , l = this._connectWith();
                        if (l && t)
                            for (s = l.length - 1; s >= 0; s--)
                                for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                        for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                                options: this.options
                                , item: this.currentItem
                            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
                        return e(r)
                    }
                    , _removeCurrentsFromItems: function () {
                        var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                        this.items = e.grep(this.items, function (e) {
                            for (var i = 0; t.length > i; i++)
                                if (t[i] === e.item[0]) return !1;
                            return !0
                        })
                    }
                    , _refreshItems: function (t) {
                        this.items = [], this.containers = [this];
                        var i, s, n, a, o, r, h, l, u = this.items
                            , d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                                item: this.currentItem
                            }) : e(this.options.items, this.element), this]]
                            , c = this._connectWith();
                        if (c && this.ready)
                            for (i = c.length - 1; i >= 0; i--)
                                for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                                    item: this.currentItem
                                }) : e(a.options.items, a.element), a]), this.containers.push(a));
                        for (i = d.length - 1; i >= 0; i--)
                            for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
                                item: h
                                , instance: o
                                , width: 0
                                , height: 0
                                , left: 0
                                , top: 0
                            })
                    }
                    , refreshPositions: function (t) {
                        this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                        var i, s, n, a;
                        for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
                        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                        else
                            for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                        return this
                    }
                    , _createPlaceholder: function (t) {
                        t = t || this;
                        var i, s = t.options;
                        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                            element: function () {
                                var s = t.currentItem[0].nodeName.toLowerCase()
                                    , n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                                return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                            }
                            , update: function (e, n) {
                                (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
                    }
                    , _createTrPlaceholder: function (t, i) {
                        var s = this;
                        t.children().each(function () {
                            e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
                        })
                    }
                    , _contactContainers: function (t) {
                        var i, s, n, a, o, r, h, l, u, d, c = null
                            , p = null;
                        for (i = this.containers.length - 1; i >= 0; i--)
                            if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                                if (this._intersectsWith(this.containers[i].containerCache)) {
                                    if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                                    c = this.containers[i], p = i
                                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                        if (c)
                            if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                            else {
                                for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                                if (!a && !this.options.dropOnEmpty) return;
                                if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                                a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                            }
                    }
                    , _createHelper: function (t) {
                        var i = this.options
                            , s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                        return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                            width: this.currentItem[0].style.width
                            , height: this.currentItem[0].style.height
                            , position: this.currentItem.css("position")
                            , top: this.currentItem.css("top")
                            , left: this.currentItem.css("left")
                        }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
                    }
                    , _adjustOffsetFromHelper: function (t) {
                        "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                            left: +t[0]
                            , top: +t[1] || 0
                        }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                    }
                    , _getParentOffset: function () {
                        this.offsetParent = this.helper.offsetParent();
                        var t = this.offsetParent.offset();
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                            top: 0
                            , left: 0
                        }), {
                            top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0)
                            , left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    }
                    , _getRelativeOffset: function () {
                        if ("relative" === this.cssPosition) {
                            var e = this.currentItem.position();
                            return {
                                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop()
                                , left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                            }
                        }
                        return {
                            top: 0
                            , left: 0
                        }
                    }
                    , _cacheMargins: function () {
                        this.margins = {
                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0
                            , top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                        }
                    }
                    , _cacheHelperProportions: function () {
                        this.helperProportions = {
                            width: this.helper.outerWidth()
                            , height: this.helper.outerHeight()
                        }
                    }
                    , _setContainment: function () {
                        var t, i, s, n = this.options;
                        "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                    }
                    , _convertPositionTo: function (t, i) {
                        i || (i = this.position);
                        var s = "absolute" === t ? 1 : -1
                            , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                            , a = /(html|body)/i.test(n[0].tagName);
                        return {
                            top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s
                            , left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
                        }
                    }
                    , _generatePosition: function (t) {
                        var i, s, n = this.options
                            , a = t.pageX
                            , o = t.pageY
                            , r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
                            , h = /(html|body)/i.test(r[0].tagName);
                        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                            top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop())
                            , left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
                        }
                    }
                    , _rearrange: function (e, t, i, s) {
                        i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                        var n = this.counter;
                        this._delay(function () {
                            n === this.counter && this.refreshPositions(!s)
                        })
                    }
                    , _clear: function (e, t) {
                        function i(e, t, i) {
                            return function (s) {
                                i._trigger(e, s, t._uiHash(t))
                            }
                        }
                        this.reverting = !1;
                        var s, n = [];
                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                            for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                        } else this.currentItem.show();
                        for (this.fromOutside && !t && n.push(function (e) {
                                this._trigger("receive", e, this._uiHash(this.fromOutside))
                            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
                                this._trigger("update", e, this._uiHash())
                            }), this !== this.currentContainer && (t || (n.push(function (e) {
                                this._trigger("remove", e, this._uiHash())
                            }), n.push(function (e) {
                                return function (t) {
                                    e._trigger("receive", t, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)), n.push(function (e) {
                                return function (t) {
                                    e._trigger("update", t, this._uiHash(this))
                                }
                            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                            for (s = 0; n.length > s; s++) n[s].call(this, e);
                            this._trigger("stop", e, this._uiHash())
                        }
                        return this.fromOutside = !1, !this.cancelHelperRemoval
                    }
                    , _trigger: function () {
                        e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                    }
                    , _uiHash: function (t) {
                        var i = t || this;
                        return {
                            helper: i.helper
                            , placeholder: i.placeholder || e([])
                            , position: i.position
                            , originalPosition: i.originalPosition
                            , offset: i.positionAbs
                            , item: i.currentItem
                            , sender: t ? t.element : null
                        }
                    }
                }), e.widget("ui.spinner", {
                    version: "1.11.4"
                    , defaultElement: "<input>"
                    , widgetEventPrefix: "spin"
                    , options: {
                        culture: null
                        , icons: {
                            down: "ui-icon-triangle-1-s"
                            , up: "ui-icon-triangle-1-n"
                        }
                        , incremental: !0
                        , max: null
                        , min: null
                        , numberFormat: null
                        , page: 10
                        , step: 1
                        , change: null
                        , spin: null
                        , start: null
                        , stop: null
                    }
                    , _create: function () {
                        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    }
                    , _getCreateOptions: function () {
                        var t = {}
                            , i = this.element;
                        return e.each(["min", "max", "step"], function (e, s) {
                            var n = i.attr(s);
                            void 0 !== n && n.length && (t[s] = n)
                        }), t
                    }
                    , _events: {
                        keydown: function (e) {
                            this._start(e) && this._keydown(e) && e.preventDefault()
                        }
                        , keyup: "_stop"
                        , focus: function () {
                            this.previous = this.element.val()
                        }
                        , blur: function (e) {
                            return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
                        }
                        , mousewheel: function (e, t) {
                            if (t) {
                                if (!this.spinning && !this._start(e)) return !1;
                                this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                                    this.spinning && this._stop(e)
                                }, 100), e.preventDefault()
                            }
                        }
                        , "mousedown .ui-spinner-button": function (t) {
                            function i() {
                                var e = this.element[0] === this.document[0].activeElement;
                                e || (this.element.focus(), this.previous = s, this._delay(function () {
                                    this.previous = s
                                }))
                            }
                            var s;
                            s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                                delete this.cancelBlur, i.call(this)
                            }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                        }
                        , "mouseup .ui-spinner-button": "_stop"
                        , "mouseenter .ui-spinner-button": function (t) {
                            return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
                        }
                        , "mouseleave .ui-spinner-button": "_stop"
                    }
                    , _draw: function () {
                        var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                        this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
                    }
                    , _keydown: function (t) {
                        var i = this.options
                            , s = e.ui.keyCode;
                        switch (t.keyCode) {
                        case s.UP:
                            return this._repeat(null, 1, t), !0;
                        case s.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case s.PAGE_UP:
                            return this._repeat(null, i.page, t), !0;
                        case s.PAGE_DOWN:
                            return this._repeat(null, -i.page, t), !0
                        }
                        return !1
                    }
                    , _uiSpinnerHtml: function () {
                        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                    }
                    , _buttonHtml: function () {
                        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
                    }
                    , _start: function (e) {
                        return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
                    }
                    , _repeat: function (e, t, i) {
                        e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                            this._repeat(40, t, i)
                        }, e), this._spin(t * this.options.step, i)
                    }
                    , _spin: function (e, t) {
                        var i = this.value() || 0;
                        this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                            value: i
                        }) === !1 || (this._value(i), this.counter++)
                    }
                    , _increment: function (t) {
                        var i = this.options.incremental;
                        return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                    }
                    , _precision: function () {
                        var e = this._precisionOf(this.options.step);
                        return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
                    }
                    , _precisionOf: function (e) {
                        var t = "" + e
                            , i = t.indexOf(".");
                        return -1 === i ? 0 : t.length - i - 1
                    }
                    , _adjustValue: function (e) {
                        var t, i, s = this.options;
                        return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
                    }
                    , _stop: function (e) {
                        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
                    }
                    , _setOption: function (e, t) {
                        if ("culture" === e || "numberFormat" === e) {
                            var i = this._parse(this.element.val());
                            return this.options[e] = t, this.element.val(this._format(i)), void 0
                        }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
                    }
                    , _setOptions: h(function (e) {
                        this._super(e)
                    })
                    , _parse: function (e) {
                        return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
                    }
                    , _format: function (e) {
                        return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
                    }
                    , _refresh: function () {
                        this.element.attr({
                            "aria-valuemin": this.options.min
                            , "aria-valuemax": this.options.max
                            , "aria-valuenow": this._parse(this.element.val())
                        })
                    }
                    , isValid: function () {
                        var e = this.value();
                        return null === e ? !1 : e === this._adjustValue(e)
                    }
                    , _value: function (e, t) {
                        var i;
                        "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
                    }
                    , _destroy: function () {
                        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                    }
                    , stepUp: h(function (e) {
                        this._stepUp(e)
                    })
                    , _stepUp: function (e) {
                        this._start() && (this._spin((e || 1) * this.options.step), this._stop())
                    }
                    , stepDown: h(function (e) {
                        this._stepDown(e)
                    })
                    , _stepDown: function (e) {
                        this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
                    }
                    , pageUp: h(function (e) {
                        this._stepUp((e || 1) * this.options.page)
                    })
                    , pageDown: h(function (e) {
                        this._stepDown((e || 1) * this.options.page)
                    })
                    , value: function (e) {
                        return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val())
                    }
                    , widget: function () {
                        return this.uiSpinner
                    }
                }), e.widget("ui.tabs", {
                    version: "1.11.4"
                    , delay: 300
                    , options: {
                        active: null
                        , collapsible: !1
                        , event: "click"
                        , heightStyle: "content"
                        , hide: null
                        , show: null
                        , activate: null
                        , beforeActivate: null
                        , beforeLoad: null
                        , load: null
                    }
                    , _isLocal: function () {
                        var e = /#.*$/;
                        return function (t) {
                            var i, s;
                            t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
                            try {
                                i = decodeURIComponent(i)
                            } catch (n) {}
                            try {
                                s = decodeURIComponent(s)
                            } catch (n) {}
                            return t.hash.length > 1 && i === s
                        }
                    }()
                    , _create: function () {
                        var t = this
                            , i = this.options;
                        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                            return t.tabs.index(e)
                        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
                    }
                    , _initialActive: function () {
                        var t = this.options.active
                            , i = this.options.collapsible
                            , s = location.hash.substring(1);
                        return null === t && (s && this.tabs.each(function (i, n) {
                            return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0
                        }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
                    }
                    , _getCreateEventData: function () {
                        return {
                            tab: this.active
                            , panel: this.active.length ? this._getPanelForTab(this.active) : e()
                        }
                    }
                    , _tabKeydown: function (t) {
                        var i = e(this.document[0].activeElement).closest("li")
                            , s = this.tabs.index(i)
                            , n = !0;
                        if (!this._handlePageNav(t)) {
                            switch (t.keyCode) {
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                                s++;
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.LEFT:
                                n = !1, s--;
                                break;
                            case e.ui.keyCode.END:
                                s = this.anchors.length - 1;
                                break;
                            case e.ui.keyCode.HOME:
                                s = 0;
                                break;
                            case e.ui.keyCode.SPACE:
                                return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                            case e.ui.keyCode.ENTER:
                                return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                            default:
                                return
                            }
                            t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                                this.option("active", s)
                            }, this.delay))
                        }
                    }
                    , _panelKeydown: function (t) {
                        this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
                    }
                    , _handlePageNav: function (t) {
                        return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                    }
                    , _findNextTab: function (t, i) {
                        function s() {
                            return t > n && (t = 0), 0 > t && (t = n), t
                        }
                        for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
                        return t
                    }
                    , _focusNextTab: function (e, t) {
                        return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
                    }
                    , _setOption: function (e, t) {
                        return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
                    }
                    , _sanitizeSelector: function (e) {
                        return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                    }
                    , refresh: function () {
                        var t = this.options
                            , i = this.tablist.children(":has(a[href])");
                        t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                            return i.index(e)
                        }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
                    }
                    , _refresh: function () {
                        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                            "aria-selected": "false"
                            , "aria-expanded": "false"
                            , tabIndex: -1
                        }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                            "aria-hidden": "true"
                        }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                            "aria-selected": "true"
                            , "aria-expanded": "true"
                            , tabIndex: 0
                        }), this._getPanelForTab(this.active).show().attr({
                            "aria-hidden": "false"
                        })) : this.tabs.eq(0).attr("tabIndex", 0)
                    }
                    , _processTabs: function () {
                        var t = this
                            , i = this.tabs
                            , s = this.anchors
                            , n = this.panels;
                        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
                            e(this).is(".ui-state-disabled") && t.preventDefault()
                        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                            e(this).closest("li").is(".ui-state-disabled") && this.blur()
                        }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                            role: "tab"
                            , tabIndex: -1
                        }), this.anchors = this.tabs.map(function () {
                            return e("a", this)[0]
                        }).addClass("ui-tabs-anchor").attr({
                            role: "presentation"
                            , tabIndex: -1
                        }), this.panels = e(), this.anchors.each(function (i, s) {
                            var n, a, o, r = e(s).uniqueId().attr("id")
                                , h = e(s).closest("li")
                                , l = h.attr("aria-controls");
                            t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({
                                "aria-controls": o
                                , "aria-labelledby": r
                            }), a.attr("aria-labelledby", r)
                        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
                    }
                    , _getList: function () {
                        return this.tablist || this.element.find("ol,ul").eq(0)
                    }
                    , _createPanel: function (t) {
                        return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                    }
                    , _setupDisabled: function (t) {
                        e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                        for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                        this.options.disabled = t
                    }
                    , _setupEvents: function (t) {
                        var i = {};
                        t && e.each(t.split(" "), function (e, t) {
                            i[t] = "_eventHandler"
                        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                            click: function (e) {
                                e.preventDefault()
                            }
                        }), this._on(this.anchors, i), this._on(this.tabs, {
                            keydown: "_tabKeydown"
                        }), this._on(this.panels, {
                            keydown: "_panelKeydown"
                        }), this._focusable(this.tabs), this._hoverable(this.tabs)
                    }
                    , _setupHeightStyle: function (t) {
                        var i, s = this.element.parent();
                        "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                            var t = e(this)
                                , s = t.css("position");
                            "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
                        }), this.element.children().not(this.panels).each(function () {
                            i -= e(this).outerHeight(!0)
                        }), this.panels.each(function () {
                            e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                        }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                            i = Math.max(i, e(this).height("").height())
                        }).height(i))
                    }
                    , _eventHandler: function (t) {
                        var i = this.options
                            , s = this.active
                            , n = e(t.currentTarget)
                            , a = n.closest("li")
                            , o = a[0] === s[0]
                            , r = o && i.collapsible
                            , h = r ? e() : this._getPanelForTab(a)
                            , l = s.length ? this._getPanelForTab(s) : e()
                            , u = {
                                oldTab: s
                                , oldPanel: l
                                , newTab: r ? e() : a
                                , newPanel: h
                            };
                        t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
                    }
                    , _toggle: function (t, i) {
                        function s() {
                            a.running = !1, a._trigger("activate", t, i)
                        }

                        function n() {
                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
                        }
                        var a = this
                            , o = i.newPanel
                            , r = i.oldPanel;
                        this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                            "aria-selected": "false"
                            , "aria-expanded": "false"
                        }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                            return 0 === e(this).attr("tabIndex")
                        }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                            "aria-selected": "true"
                            , "aria-expanded": "true"
                            , tabIndex: 0
                        })
                    }
                    , _activate: function (t) {
                        var i, s = this._findActive(t);
                        s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                            target: i
                            , currentTarget: i
                            , preventDefault: e.noop
                        }))
                    }
                    , _findActive: function (t) {
                        return t === !1 ? e() : this.tabs.eq(t)
                    }
                    , _getIndex: function (e) {
                        return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
                    }
                    , _destroy: function () {
                        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                            e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                        }), this.tabs.each(function () {
                            var t = e(this)
                                , i = t.data("ui-tabs-aria-controls");
                            i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                    }
                    , enable: function (t) {
                        var i = this.options.disabled;
                        i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
                            return e !== t ? e : null
                        }) : e.map(this.tabs, function (e, i) {
                            return i !== t ? i : null
                        })), this._setupDisabled(i))
                    }
                    , disable: function (t) {
                        var i = this.options.disabled;
                        if (i !== !0) {
                            if (void 0 === t) i = !0;
                            else {
                                if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                                i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                            }
                            this._setupDisabled(i)
                        }
                    }
                    , load: function (t, i) {
                        t = this._getIndex(t);
                        var s = this
                            , n = this.tabs.eq(t)
                            , a = n.find(".ui-tabs-anchor")
                            , o = this._getPanelForTab(n)
                            , r = {
                                tab: n
                                , panel: o
                            }
                            , h = function (e, t) {
                                "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
                            };
                        this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) {
                            setTimeout(function () {
                                o.html(e), s._trigger("load", i, r), h(n, t)
                            }, 1)
                        }).fail(function (e, t) {
                            setTimeout(function () {
                                h(e, t)
                            }, 1)
                        })))
                    }
                    , _ajaxSettings: function (t, i, s) {
                        var n = this;
                        return {
                            url: t.attr("href")
                            , beforeSend: function (t, a) {
                                return n._trigger("beforeLoad", i, e.extend({
                                    jqXHR: t
                                    , ajaxSettings: a
                                }, s))
                            }
                        }
                    }
                    , _getPanelForTab: function (t) {
                        var i = e(t).attr("aria-controls");
                        return this.element.find(this._sanitizeSelector("#" + i))
                    }
                }), e.widget("ui.tooltip", {
                    version: "1.11.4"
                    , options: {
                        content: function () {
                            var t = e(this).attr("title") || "";
                            return e("<a>").text(t).html()
                        }
                        , hide: !0
                        , items: "[title]:not([disabled])"
                        , position: {
                            my: "left top+15"
                            , at: "left bottom"
                            , collision: "flipfit flip"
                        }
                        , show: !0
                        , tooltipClass: null
                        , track: !1
                        , close: null
                        , open: null
                    }
                    , _addDescribedBy: function (t, i) {
                        var s = (t.attr("aria-describedby") || "").split(/\s+/);
                        s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
                    }
                    , _removeDescribedBy: function (t) {
                        var i = t.data("ui-tooltip-id")
                            , s = (t.attr("aria-describedby") || "").split(/\s+/)
                            , n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
                    }
                    , _create: function () {
                        this._on({
                            mouseover: "open"
                            , focusin: "open"
                        }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                            role: "log"
                            , "aria-live": "assertive"
                            , "aria-relevant": "additions"
                        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                    }
                    , _setOption: function (t, i) {
                        var s = this;
                        return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
                            s._updateContent(t.element)
                        }), void 0)
                    }
                    , _disable: function () {
                        var t = this;
                        e.each(this.tooltips, function (i, s) {
                            var n = e.Event("blur");
                            n.target = n.currentTarget = s.element[0], t.close(n, !0)
                        }), this.element.find(this.options.items).addBack().each(function () {
                            var t = e(this);
                            t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                        })
                    }
                    , _enable: function () {
                        this.element.find(this.options.items).addBack().each(function () {
                            var t = e(this);
                            t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                        })
                    }
                    , open: function (t) {
                        var i = this
                            , s = e(t ? t.target : this.element).closest(this.options.items);
                        s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
                            var t, s = e(this);
                            s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                                element: this
                                , title: s.attr("title")
                            }, s.attr("title", ""))
                        }), this._registerCloseHandlers(t, s), this._updateContent(s, t))
                    }
                    , _updateContent: function (e, t) {
                        var i, s = this.options.content
                            , n = this
                            , a = t ? t.type : null;
                        return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
                            n._delay(function () {
                                e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i))
                            })
                        }), i && this._open(t, e, i), void 0)
                    }
                    , _open: function (t, i, s) {
                        function n(e) {
                            l.of = e, o.is(":hidden") || o.position(l)
                        }
                        var a, o, r, h, l = e.extend({}, this.options.position);
                        if (s) {
                            if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
                            i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                                mousemove: n
                            }), n(t)) : o.position(e.extend({
                                of: i
                            }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                                o.is(":visible") && (n(l.of), clearInterval(r))
                            }, e.fx.interval)), this._trigger("open", t, {
                                tooltip: o
                            })
                        }
                    }
                    , _registerCloseHandlers: function (t, i) {
                        var s = {
                            keyup: function (t) {
                                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                                    var s = e.Event(t);
                                    s.currentTarget = i[0], this.close(s, !0)
                                }
                            }
                        };
                        i[0] !== this.element[0] && (s.remove = function () {
                            this._removeTooltip(this._find(i).tooltip)
                        }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s)
                    }
                    , close: function (t) {
                        var i, s = this
                            , n = e(t ? t.currentTarget : this.element)
                            , a = this._find(n);
                        return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                            s._removeTooltip(e(this))
                        }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
                            e(i.element).attr("title", i.title), delete s.parents[t]
                        }), a.closing = !0, this._trigger("close", t, {
                            tooltip: i
                        }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
                    }
                    , _tooltip: function (t) {
                        var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""))
                            , s = i.uniqueId().attr("id");
                        return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                            element: t
                            , tooltip: i
                        }
                    }
                    , _find: function (e) {
                        var t = e.data("ui-tooltip-id");
                        return t ? this.tooltips[t] : null
                    }
                    , _removeTooltip: function (e) {
                        e.remove(), delete this.tooltips[e.attr("id")]
                    }
                    , _destroy: function () {
                        var t = this;
                        e.each(this.tooltips, function (i, s) {
                            var n = e.Event("blur")
                                , a = s.element;
                            n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
                        }), this.liveRegion.remove()
                    }
                })
        });
        /*=================================
              08jQueryValidate.min.js
        ==================================*/

        // JavaScript Document
        /*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
         * http://jqueryvalidation.org/
         * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
        ! function (a) {
            "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
        }(function (a) {
            a.extend(a.fn, {
                validate: function (b) {
                    if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                    var c = a.data(this[0], "validator");
                    return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                        c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
                    }), this.on("submit.validate", function (b) {
                        function d() {
                            var d, e;
                            return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
                        }
                        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                    })), c)
                }
                , valid: function () {
                    var b, c, d;
                    return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                        b = c.element(this) && b, d = d.concat(c.errorList)
                    }), c.errorList = d), b
                }
                , rules: function (b, c) {
                    var d, e, f, g, h, i, j = this[0];
                    if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                    }
                    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                        required: h
                    }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                        remote: h
                    })), g
                }
            }), a.extend(a.expr[":"], {
                blank: function (b) {
                    return !a.trim("" + a(b).val())
                }
                , filled: function (b) {
                    return !!a.trim("" + a(b).val())
                }
                , unchecked: function (b) {
                    return !a(b).prop("checked")
                }
            }), a.validator = function (b, c) {
                this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
            }, a.validator.format = function (b, c) {
                return 1 === arguments.length ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c)
                } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
                    b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                        return c
                    })
                }), b)
            }, a.extend(a.validator, {
                defaults: {
                    messages: {}
                    , groups: {}
                    , rules: {}
                    , errorClass: "error"
                    , validClass: "valid"
                    , errorElement: "label"
                    , focusCleanup: !1
                    , focusInvalid: !0
                    , errorContainer: a([])
                    , errorLabelContainer: a([])
                    , onsubmit: !0
                    , ignore: ":hidden"
                    , ignoreTitle: !1
                    , onfocusin: function (a) {
                        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
                    }
                    , onfocusout: function (a) {
                        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                    }
                    , onkeyup: function (b, c) {
                        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
                    }
                    , onclick: function (a) {
                        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                    }
                    , highlight: function (b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                    }
                    , unhighlight: function (b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                    }
                }
                , setDefaults: function (b) {
                    a.extend(a.validator.defaults, b)
                }
                , messages: {
                    required: "This field is required."
                    , remote: "Please fix this field."
                    , email: "Please enter a valid email address."
                    , url: "Please enter a valid URL."
                    , date: "Please enter a valid date."
                    , dateISO: "Please enter a valid date ( ISO )."
                    , number: "Please enter a valid number."
                    , digits: "Please enter only digits."
                    , creditcard: "Please enter a valid credit card number."
                    , equalTo: "Please enter the same value again."
                    , maxlength: a.validator.format("Please enter no more than {0} characters.")
                    , minlength: a.validator.format("Please enter at least {0} characters.")
                    , rangelength: a.validator.format("Please enter a value between {0} and {1} characters long.")
                    , range: a.validator.format("Please enter a value between {0} and {1}.")
                    , max: a.validator.format("Please enter a value less than or equal to {0}.")
                    , min: a.validator.format("Please enter a value greater than or equal to {0}.")
                }
                , autoCreateRanges: !1
                , prototype: {
                    init: function () {
                        function b(b) {
                            var c = a.data(this.form, "validator")
                                , d = "on" + b.type.replace(/^validate/, "")
                                , e = c.settings;
                            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                        }
                        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                        var c, d = this.groups = {};
                        a.each(this.settings.groups, function (b, c) {
                            "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                                d[c] = b
                            })
                        }), c = this.settings.rules, a.each(c, function (b, d) {
                            c[b] = a.validator.normalizeRule(d)
                        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                    }
                    , form: function () {
                        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                    }
                    , checkForm: function () {
                        this.prepareForm();
                        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                        return this.valid()
                    }
                    , element: function (b) {
                        var c = this.clean(b)
                            , d = this.validationTargetFor(c)
                            , e = !0;
                        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                    }
                    , showErrors: function (b) {
                        if (b) {
                            a.extend(this.errorMap, b), this.errorList = [];
                            for (var c in b) this.errorList.push({
                                message: b[c]
                                , element: this.findByName(c)[0]
                            });
                            this.successList = a.grep(this.successList, function (a) {
                                return !(a.name in b)
                            })
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    }
                    , resetForm: function () {
                        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                        var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        if (this.settings.unhighlight)
                            for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                        else c.removeClass(this.settings.errorClass)
                    }
                    , numberOfInvalids: function () {
                        return this.objectLength(this.invalid)
                    }
                    , objectLength: function (a) {
                        var b, c = 0;
                        for (b in a) c++;
                        return c
                    }
                    , hideErrors: function () {
                        this.hideThese(this.toHide)
                    }
                    , hideThese: function (a) {
                        a.not(this.containers).text(""), this.addWrapper(a).hide()
                    }
                    , valid: function () {
                        return 0 === this.size()
                    }
                    , size: function () {
                        return this.errorList.length
                    }
                    , focusInvalid: function () {
                        if (this.settings.focusInvalid) try {
                            a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                        } catch (b) {}
                    }
                    , findLastActive: function () {
                        var b = this.lastActive;
                        return b && 1 === a.grep(this.errorList, function (a) {
                            return a.element.name === b.name
                        }).length && b
                    }
                    , elements: function () {
                        var b = this
                            , c = {};
                        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                            return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                        })
                    }
                    , clean: function (b) {
                        return a(b)[0]
                    }
                    , errors: function () {
                        var b = this.settings.errorClass.split(" ").join(".");
                        return a(this.settings.errorElement + "." + b, this.errorContext)
                    }
                    , reset: function () {
                        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                    }
                    , prepareForm: function () {
                        this.reset(), this.toHide = this.errors().add(this.containers)
                    }
                    , prepareElement: function (a) {
                        this.reset(), this.toHide = this.errorsFor(a)
                    }
                    , elementValue: function (b) {
                        var c, d = a(b)
                            , e = b.type;
                        return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                    }
                    , check: function (b) {
                        b = this.validationTargetFor(this.clean(b));
                        var c, d, e, f = a(b).rules()
                            , g = a.map(f, function (a, b) {
                                return b
                            }).length
                            , h = !1
                            , i = this.elementValue(b);
                        for (d in f) {
                            e = {
                                method: d
                                , parameters: f[d]
                            };
                            try {
                                if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                                    h = !0;
                                    continue
                                }
                                if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                                if (!c) return this.formatAndAdd(b, e), !1
                            } catch (j) {
                                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                            }
                        }
                        if (!h) return this.objectLength(f) && this.successList.push(b), !0
                    }
                    , customDataMessage: function (b, c) {
                        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
                    }
                    , customMessage: function (a, b) {
                        var c = this.settings.messages[a];
                        return c && (c.constructor === String ? c : c[b])
                    }
                    , findDefined: function () {
                        for (var a = 0; a < arguments.length; a++)
                            if (void 0 !== arguments[a]) return arguments[a];
                        return void 0
                    }
                    , defaultMessage: function (b, c) {
                        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                    }
                    , formatAndAdd: function (b, c) {
                        var d = this.defaultMessage(b, c.method)
                            , e = /\$?\{(\d+)\}/g;
                        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                            message: d
                            , element: b
                            , method: c.method
                        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                    }
                    , addWrapper: function (a) {
                        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                    }
                    , defaultShowErrors: function () {
                        var a, b, c;
                        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                            for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                        if (this.settings.unhighlight)
                            for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                    }
                    , validElements: function () {
                        return this.currentElements.not(this.invalidElements())
                    }
                    , invalidElements: function () {
                        return a(this.errorList).map(function () {
                            return this.element
                        })
                    }
                    , showLabel: function (b, c) {
                        var d, e, f, g = this.errorsFor(b)
                            , h = this.idOrName(b)
                            , i = a(b).attr("aria-describedby");
                        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                            c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
                    }
                    , errorsFor: function (b) {
                        var c = this.idOrName(b)
                            , d = a(b).attr("aria-describedby")
                            , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
                    }
                    , idOrName: function (a) {
                        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                    }
                    , validationTargetFor: function (b) {
                        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
                    }
                    , checkable: function (a) {
                        return /radio|checkbox/i.test(a.type)
                    }
                    , findByName: function (b) {
                        return a(this.currentForm).find("[name='" + b + "']")
                    }
                    , getLength: function (b, c) {
                        switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                        }
                        return b.length
                    }
                    , depend: function (a, b) {
                        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
                    }
                    , dependTypes: {
                        "boolean": function (a) {
                            return a
                        }
                        , string: function (b, c) {
                            return !!a(b, c.form).length
                        }
                        , "function": function (a, b) {
                            return a(b)
                        }
                    }
                    , optional: function (b) {
                        var c = this.elementValue(b);
                        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                    }
                    , startRequest: function (a) {
                        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
                    }
                    , stopRequest: function (b, c) {
                        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                    }
                    , previousValue: function (b) {
                        return a.data(b, "previousValue") || a.data(b, "previousValue", {
                            old: null
                            , valid: !0
                            , message: this.defaultMessage(b, "remote")
                        })
                    }
                    , destroy: function () {
                        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
                    }
                }
                , classRuleSettings: {
                    required: {
                        required: !0
                    }
                    , email: {
                        email: !0
                    }
                    , url: {
                        url: !0
                    }
                    , date: {
                        date: !0
                    }
                    , dateISO: {
                        dateISO: !0
                    }
                    , number: {
                        number: !0
                    }
                    , digits: {
                        digits: !0
                    }
                    , creditcard: {
                        creditcard: !0
                    }
                }
                , addClassRules: function (b, c) {
                    b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
                }
                , classRules: function (b) {
                    var c = {}
                        , d = a(b).attr("class");
                    return d && a.each(d.split(" "), function () {
                        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                    }), c
                }
                , normalizeAttributeRule: function (a, b, c, d) {
                    /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
                }
                , attributeRules: function (b) {
                    var c, d, e = {}
                        , f = a(b)
                        , g = b.getAttribute("type");
                    for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                    return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
                }
                , dataRules: function (b) {
                    var c, d, e = {}
                        , f = a(b)
                        , g = b.getAttribute("type");
                    for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
                    return e
                }
                , staticRules: function (b) {
                    var c = {}
                        , d = a.data(b.form, "validator");
                    return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
                }
                , normalizeRules: function (b, c) {
                    return a.each(b, function (d, e) {
                        if (e === !1) return void delete b[d];
                        if (e.param || e.depends) {
                            var f = !0;
                            switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                            }
                            f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                        }
                    }), a.each(b, function (d, e) {
                        b[d] = a.isFunction(e) ? e(c) : e
                    }), a.each(["minlength", "maxlength"], function () {
                        b[this] && (b[this] = Number(b[this]))
                    }), a.each(["rangelength", "range"], function () {
                        var c;
                        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                    }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
                }
                , normalizeRule: function (b) {
                    if ("string" == typeof b) {
                        var c = {};
                        a.each(b.split(/\s/), function () {
                            c[this] = !0
                        }), b = c
                    }
                    return b
                }
                , addMethod: function (b, c, d) {
                    a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
                }
                , methods: {
                    required: function (b, c, d) {
                        if (!this.depend(d, c)) return "dependency-mismatch";
                        if ("select" === c.nodeName.toLowerCase()) {
                            var e = a(c).val();
                            return e && e.length > 0
                        }
                        return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
                    }
                    , email: function (a, b) {
                        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
                    }
                    , url: function (a, b) {
                        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
                    }
                    , date: function (a, b) {
                        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                    }
                    , dateISO: function (a, b) {
                        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
                    }
                    , number: function (a, b) {
                        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                    }
                    , digits: function (a, b) {
                        return this.optional(b) || /^\d+$/.test(a)
                    }
                    , creditcard: function (a, b) {
                        if (this.optional(b)) return "dependency-mismatch";
                        if (/[^0-9 \-]+/.test(a)) return !1;
                        var c, d, e = 0
                            , f = 0
                            , g = !1;
                        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                        for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                        return e % 10 === 0
                    }
                    , minlength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || e >= d
                    }
                    , maxlength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || d >= e
                    }
                    , rangelength: function (b, c, d) {
                        var e = a.isArray(b) ? b.length : this.getLength(b, c);
                        return this.optional(c) || e >= d[0] && e <= d[1]
                    }
                    , min: function (a, b, c) {
                        return this.optional(b) || a >= c
                    }
                    , max: function (a, b, c) {
                        return this.optional(b) || c >= a
                    }
                    , range: function (a, b, c) {
                        return this.optional(b) || a >= c[0] && a <= c[1]
                    }
                    , equalTo: function (b, c, d) {
                        var e = a(d);
                        return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                            a(c).valid()
                        }), b === e.val()
                    }
                    , remote: function (b, c, d) {
                        if (this.optional(c)) return "dependency-mismatch";
                        var e, f, g = this.previousValue(c);
                        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                            url: d
                        } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                            mode: "abort"
                            , port: "validate" + c.name
                            , dataType: "json"
                            , data: f
                            , context: e.currentForm
                            , success: function (d) {
                                var f, h, i, j = d === !0 || "true" === d;
                                e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                            }
                        }, d)), "pending")
                    }
                }
            });
            var b, c = {};
            a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
                var e = a.port;
                "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
            }) : (b = a.ajax, a.ajax = function (d) {
                var e = ("mode" in d ? d : a.ajaxSettings).mode
                    , f = ("port" in d ? d : a.ajaxSettings).port;
                return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
            })
        });

/*========================
            Functions . Js
========================*/

// JavaScript Document

// Start Jquery
        $(document).ready(function () {

    /*========================
            	     prettyphoto
    =========================*/

            $("a[rel^='prettyPhoto']").prettyPhoto({
                default_width: 853
                , default_height: 480
                , social_tools: false
                , theme: 'facebook'
            });

    /*=========================
             Dashboard edit animation
    ==========================*/
            $('.loading').delay(500).fadeOut(500);

            $('select#change').on('change', function () {

                if (this.value == 'false') {

                    $('div#html').append('<span class="nothing"><label>Html:</label><br><textarea class="form-control materialize-textarea" id="upDate" rows="5" name="html" value=""></textarea><br><br></span>');

                } else if (this.value == 'true') {

                    $('span.nothing').remove();

                } else if (this.value == 'Please choose a selection.') {

                    alert(this.value);

                }

            });

    /*========================
              Menu toggle animation	
    =========================*/
            $('div.admin button.downish').toggle(

                function () {
                    $('tr.bPosts').fadeOut('slow');
                    $('div.admin button.downish span').remove();
                    $('div.admin button.downish').append('<span>Open</span>');
                },

                function () {
                    $('tr.bPosts').fadeIn('slow');
                    $('div.admin button.downish span').remove();
                    $('div.admin button.downish').append('<span>Close</span>');
                }

            );

    /*==================
                Dropzone.js 
    ==================*/

            $(document).ready(function () {
                $('#albumChoice').change(function () {

                    var value = $(this).val();
                    if (value.length > 0) {
                        console.log(value);
                        $('form.dropzone').fadeIn();
                        $('#album').val(value);

                    } else {
                        $('form.dropzone').fadeOut();
                    }
                });
            });

    /*===================			
               Image Draggable
    ===================*/

            $(function () {
                $("#sortable").sortable({
                    update: function (event, ui) {
                        var data = $(this).sortable('serialize');
                        $.post('libraries/themes/login/adminBlocks/save_order.php', data, function (theResponse) {

                            console.log(theResponse);

                        });

                        console.log(data);

                    }

                });

            });

            $(function () {
                $("#sort").sortable({
                    update: function (event, ui) {
                        var data = $(this).sortable('serialize');
                        $.post('libraries/themes/login/adminBlocks/gal_order.php', data, function (theResponse) {

                            console.log(theResponse);

                        });

                        console.log(data);

                    }

                });

            });

    /*========================
    adjusting font size
==========================*/
            $('#smaller').click(function () {
                var currentSize = parseInt($(".cont p").css('font-size'));
                console.log(currentSize);
                if (currentSize > 14) {
                    currentSize -= 1;
                    $(".cont p").css('font-size', currentSize);
                    $(".cont li").css('font-size', currentSize);
                } else if (isNaN(currentSize)) {
                    alert("No text can be reduced in size");
                } else {
                    alert("Unable to reduce further");
                }
            });
            $('#bigger').click(function () {
                var currentSize = parseInt($(".cont p").css('font-size'));
                console.log(currentSize);
                if (currentSize < 22) {
                    currentSize += 1;
                    $(".cont p").css('font-size', currentSize);
                    $(".cont li").css('font-size', currentSize);
                } else if (isNaN(currentSize)) {
                    alert("No text can be enlarged in size");
                } else {
                    alert("Unable to enlarge further");
                }
            });

    /*================
                Date Picker
    =================*/
            $(function () {
                $("#datepicker").datepicker({
                    showOn: "button"
                    , buttonImage: "images/calendar.gif"
                    , buttonImageOnly: true
                    , buttonText: "Select date"
                });
            });


    /*===================
     Form Validate
=====================*/
            $(document).ready(function () {

                $('#schedule input#zip').blur(function () {

                    if ($(this).val().length >= 5) {
                        $('div.cap').fadeIn('slow');
                    } else {
                        $('div.cap').fadeOut('slow');
                    }

                });

                $('#schedule1 input#name').blur(function () {

                    if ($(this).val().length >= 1) {
                        $('div.cap').fadeIn('slow');
                    } else {
                        $('div.cap').fadeOut('slow');
                    }

                });

                $('.logo').fadeIn('slow');

            });

    /*===================
      Lazy Loader
=====================*/
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });


        });