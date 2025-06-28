! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 28)
}({
    28: function(e, t) {
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

        function n(e) {
            cpd.__ld[e.impl](e)
        }
        cpd.ld = function() {
            if (cpd.b && cpd.b.length > 0) {
                cpd.__ld || (cpd.__ld = {}, cpd.__r = []);
                for (var e = 0; e < cpd.b.length; e++) cpd.b[e].rendered || function(e, t) {
                    if (cpd.__ld[t.impl]) {
                        if ("loading" !== cpd.__ld[t.impl] && (cpd.__r[e] = t, n(t), cpd.b[e].rendered = !0, t["footer-layout"] && "hidden" !== t["footer-layout"])) {
                            var o = r({}, t, {
                                rendered: !1,
                                id: t.id + 50,
                                type: "footer",
                                impl: t.impl.replace("cpc", "cpb"),
                                theme: [t["footer-layout"]].concat(t.theme.split(" ").slice(1), ["with-footer"]).join(" "),
                                position: "bottom"
                            });
                            delete o["footer-layout"], cpd.b.push(o), cpd.ld()
                        }
                    } else {
                        var d = document.createElement("script");
                        d.src = cpd.s.split("/").slice(0, -1).join("/") + "/" + t.brand + "-" + t.impl + ".js", cpd.__ld[t.impl] = "loading", document.head.appendChild(d)
                    }
                }(e, cpd.b[e])
            }
        }, cpd.ld()
    }
});