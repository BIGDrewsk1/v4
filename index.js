<iframe title="AI Widget Runtime" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" srcdoc="
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;script&gt;
        (function(){try{var w=console.warn;console.warn=function(){var a=arguments[0];if(typeof a==='string'&amp;&amp;a.indexOf('cdn.tailwindcss.com')!==-1)return;return w.apply(console,arguments);};}catch(e){}})();
        &lt;/script&gt;
        &lt;script crossorigin src=&quot;https://unpkg.com/react@18/umd/react.production.min.js&quot;&gt;&lt;/script&gt;
        &lt;script crossorigin src=&quot;https://unpkg.com/react-dom@18/umd/react-dom.production.min.js&quot;&gt;&lt;/script&gt;
        &lt;script&gt;try { window.react = window.React; } catch (eR) {}&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/prop-types@15.8.1/prop-types.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/recharts@2.12.7/umd/Recharts.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-econ-normalize.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-math-helpers.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-finance-kitchen.iife.js&quot;&gt;&lt;/script&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css&quot; /&gt;
        &lt;script src=&quot;https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-format-helpers.js&quot;&gt;&lt;/script&gt;
        &lt;!-- plotly pruned --&gt;
        
        
        
        
        &lt;script src=&quot;/r0y-vol-surface-math.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-vol-surface-widget.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-assumption-bus.js&quot;&gt;&lt;/script&gt;
        
        &lt;script src=&quot;/r0y-sandbox-charts.js&quot;&gt;&lt;/script&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;/r0y-map-sandbox.css?v=2&quot; /&gt;
        &lt;script src=&quot;/r0y-map-sandbox.iife.js?v=2&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-sandbox-runtime.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;/r0y-sandbox-primitives.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/framer-motion@11.0.0/dist/framer-motion.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/lucide-react@0.554.0/dist/umd/lucide-react.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;https://cdn.tailwindcss.com&quot;&gt;&lt;/script&gt;
        &lt;style&gt;
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html { width: 100%; height: 100%; overflow: hidden; }
          body { width: 100%; height: 100%; overflow: hidden; background: #050505; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
          #root { width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden; }
          #root &gt; * { flex: 1; min-height: 0; }
          @keyframes r0y-sec-dash { to { stroke-dashoffset: -18; } }
          .r0y-layout-sec-hi { position: relative; z-index: 1; }
          .r0y-layout-sec-ol { display: none; position: absolute; inset: 0; pointer-events: none; z-index: 99998; overflow: visible; }
          .r0y-layout-sec-hi .r0y-layout-sec-ol { display: block; }
          .r0y-layout-sec-ol rect { animation: r0y-sec-dash 0.5s linear infinite; }
          .r0y-layout-drag-ghost {
            position: fixed;
            margin: 0;
            pointer-events: none !important;
            z-index: 2147483646;
            opacity: 0.9;
            box-shadow: 0 16px 48px rgba(0,0,0,0.65), 0 0 0 2px rgba(255,255,255,0.35);
            border-radius: 10px;
            overflow: hidden;
            background: rgba(12,12,12,0.94);
            transform: scale(1.02);
            transition: none;
          }
          body.r0y-layout-grabbing { cursor: grabbing !important; user-select: none !important; -webkit-user-select: none !important; }
          body.r0y-layout-grabbing * { cursor: grabbing !important; }
          html.r0y-fill-cursor-lock,
          html.r0y-fill-cursor-lock * { cursor: var(--r0y-fill-cursor, crosshair) !important; }
          html.r0y-grab-mode, html.r0y-grab-mode body {
            user-select: none !important;
            -webkit-user-select: none !important;
          }
        &lt;/style&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
        &lt;script&gt;
window.React = React;
window.ReactDOM = ReactDOM;
if (window.PropTypes) window.React.PropTypes = window.PropTypes;
function r0yWireWidgetGlobals() {
  try {
    var Recharts = window.Recharts;
    if (Recharts &amp;&amp; Recharts.default) Recharts = Recharts.default;
    Recharts = Recharts || {};
    window.Recharts = Recharts;
    var FramerMotion = window.Motion;
    if (!FramerMotion) FramerMotion = window.framerMotion;
    window.framerMotion = FramerMotion || {};
    window.motion = window.framerMotion.motion;
    window.AnimatePresence = window.framerMotion.AnimatePresence;
    window.LazyMotion = window.framerMotion.LazyMotion;
    window.MotionConfig = window.framerMotion.MotionConfig;
    window.LayoutGroup = window.framerMotion.LayoutGroup;
    window.Reorder = window.framerMotion.Reorder;
    window.domAnimation = window.framerMotion.domAnimation;
    window.domMax = window.framerMotion.domMax;
    // lucide-react UMD is global LucideReact, but models often reference missing icon names.
    // Missing icons cause React element-type errors. Use a Proxy that returns a noop component for unknown icons.
    (function() {
      var base = window.LucideReact || {};
      try {
        if (typeof Proxy !== 'undefined') {
          window.LucideReact = new Proxy(base, {
            get: function(t, p) {
              if (p in t) return t[p];
              return function(){ return null; };
            }
          });
        } else {
          window.LucideReact = base;
        }
      } catch (eP) {
        window.LucideReact = base;
      }
      window.lucide = window.LucideReact;
      window.lucideReact = window.LucideReact;
    })();
    window.LineChart = Recharts.LineChart;
    window.BarChart = Recharts.BarChart;
    window.AreaChart = Recharts.AreaChart;
    window.PieChart = Recharts.PieChart;
    window.ComposedChart = Recharts.ComposedChart;
    window.ScatterChart = Recharts.ScatterChart;
    window.RadarChart = Recharts.RadarChart;
    window.RadialBarChart = Recharts.RadialBarChart;
    window.Treemap = Recharts.Treemap;
    window.FunnelChart = Recharts.FunnelChart;
    window.XAxis = Recharts.XAxis;
    window.YAxis = Recharts.YAxis;
    window.ZAxis = Recharts.ZAxis;
    window.CartesianGrid = Recharts.CartesianGrid;
    window.PolarGrid = Recharts.PolarGrid;
    window.PolarAngleAxis = Recharts.PolarAngleAxis;
    window.PolarRadiusAxis = Recharts.PolarRadiusAxis;
    window.Tooltip = Recharts.Tooltip;
    window.Legend = Recharts.Legend;
    window.Line = Recharts.Line;
    window.Bar = Recharts.Bar;
    window.Area = Recharts.Area;
    window.Pie = Recharts.Pie;
    window.Scatter = Recharts.Scatter;
    window.Cell = Recharts.Cell;
    window.Radar = Recharts.Radar;
    window.RadialBar = Recharts.RadialBar;
    window.ResponsiveContainer = Recharts.ResponsiveContainer;
    window.ReferenceLine = Recharts.ReferenceLine;
    window.ReferenceArea = Recharts.ReferenceArea;
    window.ReferenceDot = Recharts.ReferenceDot;
    window.Brush = Recharts.Brush;
    window.Label = Recharts.Label;
    window.LabelList = Recharts.LabelList;
    window.ErrorBar = Recharts.ErrorBar;
  } catch (eG) {}
}
r0yWireWidgetGlobals();
// Phase 6-lite lib-ensure backstop: when the srcDoc pruned a chart lib this code needs (Dev-mode
// edit / live refresh growing past the static scan), load it on demand, re-wire the globals it
// gates, and re-enter the R0Y_RENDER handler. Mirrors the self-heal r0y-vol-surface-widget.js
// already uses for plotly. Recall-oriented: over-matching just costs one lazy load, never a break.
function r0yMissingChartLibs(code) {
  var out = [];
  if (/Plotly|plotly|VolSurface/i.test(code) &amp;&amp; !window.Plotly) out.push('https://cdn.plot.ly/plotly-2.27.0.min.js');
  if (/vega/i.test(code) &amp;&amp; !window.vega) out.push('https://cdn.jsdelivr.net/npm/vega@5');
  if (/vegaLite|VegaLite/.test(code) &amp;&amp; !window.vegaLite) out.push('https://cdn.jsdelivr.net/npm/vega-lite@5');
  if (/vegaEmbed|VegaEmbed/.test(code) &amp;&amp; !window.vegaEmbed) out.push('https://cdn.jsdelivr.net/npm/vega-embed@6');
  if (/Recharts|recharts|ResponsiveContainer|LineChart|BarChart|AreaChart|PieChart|ComposedChart|ScatterChart|RadarChart|RadialBarChart|Treemap|FunnelChart|XAxis|YAxis|ZAxis|CartesianGrid|PolarGrid|PolarAngleAxis|PolarRadiusAxis|Tooltip|Legend|ReferenceLine|ReferenceArea|ReferenceDot|Brush|LabelList|ErrorBar|Sankey|Sunburst|Line|Bar|Area|Pie|Scatter|Radar|RadialBar|Cell|Label/.test(code) &amp;&amp; !window.Recharts) out.push('https://unpkg.com/recharts@2.12.7/umd/Recharts.js');
  return out;
}
function r0yLoadLibScripts(srcs) {
  return Promise.all(srcs.map(function (src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = res;
      s.onerror = function () { rej(new Error('R0Y lib load failed: ' + src)); };
      document.head.appendChild(s);
    });
  })).then(function () {
    if (window.Recharts) r0yWireWidgetGlobals();
  });
}
window.__SUPABASE_URL__ = &quot;https://mytxaxpmiysfswfolxem.supabase.co&quot;;
window.__R0Y__ = { supabaseUrl: &quot;https://mytxaxpmiysfswfolxem.supabase.co&quot; };
window.__R0Y_WIDGET_TITLE__ = &quot;9887b48a-0fb7-4e66-a80f-7f4f5168ef3b&quot;;
var _base = (window.__SUPABASE_URL__ || &quot;&quot;).replace(/\/+$/, &quot;&quot;);
var __r0y_allowed_origin = &quot;&quot;;
window.addEventListener(&quot;message&quot;, function(e) {
  if (e.data &amp;&amp; e.data.type === &quot;R0Y_SET_ORIGIN&quot; &amp;&amp; typeof e.data.origin === &quot;string&quot;) __r0y_allowed_origin = e.data.origin;
  if (e.data &amp;&amp; e.data.type === &quot;R0Y_SET_WIDGET_VISIBLE&quot;) {
    var vis = e.data.visible !== false;
    window.__R0Y_VISIBLE__ = vis;
    try {
      if (window.gsap &amp;&amp; window.gsap.globalTimeline) {
        if (vis) window.gsap.globalTimeline.resume();
        else window.gsap.globalTimeline.pause();
      }
    } catch (visErr) {}
  }
});
window.__R0Y_VISIBLE__ = true;
function r0yPostWidgetErr(msg) {
  try { parent.postMessage({ type: &quot;R0Y_WIDGET_ERROR&quot;, error: String(msg || &quot;Widget data error&quot;) }, __r0y_allowed_origin || &quot;*&quot;); } catch (e) {}
}
window.reportR0yWidgetFailure = function(message) {
  r0yPostWidgetErr(message || &quot;Widget failed to load&quot;);
};
window.fetchMarketData = function(endpointName, params) {
  return new Promise(function(resolve, reject) {
    var id = &quot;fd_&quot; + Math.random().toString(36).slice(2) + &quot;_&quot; + Date.now();
    var handler = function(e) {
      if (e.data &amp;&amp; e.data.type === &quot;R0Y_FETCH_DATA_RESULT&quot; &amp;&amp; e.data.id === id) {
        window.removeEventListener(&quot;message&quot;, handler);
        if (e.data.error) {
          reject(new Error(e.data.error));
          return;
        }
        var d = e.data.data;
        var ep = endpointName || &quot;&quot;;
        if (d == null) {
          var msgNull = &quot;Registry returned null dataset&quot; + (ep ? &quot; for endpoint: &quot; + ep : &quot;&quot;);
          reject(new Error(msgNull));
          return;
        }
        if (typeof d === &quot;object&quot; &amp;&amp; d !== null) {
          if (typeof d.error === &quot;string&quot; &amp;&amp; d.error.trim()) {
            var em = d.error.trim();
            reject(new Error(em));
            return;
          }
          if (d.ok === false) {
            var em2 = (typeof d.message === &quot;string&quot; &amp;&amp; d.message.trim()) ? d.message.trim() : (typeof d.error === &quot;string&quot; &amp;&amp; d.error.trim()) ? d.error.trim() : &quot;Registry request failed&quot;;
            reject(new Error(em2));
            return;
          }
          if (d.ok === true &amp;&amp; &quot;data&quot; in d) {
            d = d.data;
          }
          if (d.dataset === null &amp;&amp; d.identifier != null) {
            var em3 = &quot;Registry returned null dataset for identifier: &quot; + String(d.identifier);
            reject(new Error(em3));
            return;
          }
        }
        resolve(d);
      }
    };
    window.addEventListener(&quot;message&quot;, handler);
    parent.postMessage({ type: &quot;R0Y_FETCH_DATA&quot;, id: id, endpoint: endpointName || &quot;&quot;, params: params || {} }, __r0y_allowed_origin || &quot;*&quot;);
    setTimeout(function() {
      window.removeEventListener(&quot;message&quot;, handler);
      reject(new Error(&quot;Data request timeout&quot;));
    }, 30000);
  });
};
window.fetchLseData = function(endpointName, params) {
  return new Promise(function(resolve, reject) {
    var id = &quot;lse_&quot; + Math.random().toString(36).slice(2) + &quot;_&quot; + Date.now();
    var handler = function(e) {
      if (e.data &amp;&amp; e.data.type === &quot;R0Y_FETCH_LSE_RESULT&quot; &amp;&amp; e.data.id === id) {
        window.removeEventListener(&quot;message&quot;, handler);
        if (e.data.error) {
          reject(new Error(e.data.error));
          return;
        }
        var d = e.data.data;
        if (d == null) {
          reject(new Error(&quot;LSE returned null for endpoint: &quot; + (endpointName || &quot;&quot;)));
          return;
        }
        if (typeof d === &quot;object&quot; &amp;&amp; d !== null &amp;&amp; d.ok === false) {
          reject(new Error(d.error || d.message || &quot;LSE request failed&quot;));
          return;
        }
        if (typeof d === &quot;object&quot; &amp;&amp; d !== null &amp;&amp; d.ok === true &amp;&amp; &quot;data&quot; in d) {
          d = d.data;
        }
        resolve(d);
      }
    };
    window.addEventListener(&quot;message&quot;, handler);
    parent.postMessage({ type: &quot;R0Y_FETCH_LSE&quot;, id: id, endpoint: endpointName || &quot;&quot;, params: params || {} }, __r0y_allowed_origin || &quot;*&quot;);
    setTimeout(function() {
      window.removeEventListener(&quot;message&quot;, handler);
      reject(new Error(&quot;LSE data request timeout&quot;));
    }, 30000);
  });
};
window.fetchMarketContext = window.fetchMarketData;
function __r0yNormalizeEconBody(raw) {
  if (raw == null) return {};
  if (typeof raw === &quot;string&quot;) {
    var s = raw.trim();
    return s ? { series: s } : {};
  }
  if (typeof raw !== &quot;object&quot;) return {};
  if (raw.table || raw.research_key) return raw;
  if (raw.payload &amp;&amp; typeof raw.payload === &quot;object&quot;) {
    var inner = __r0yNormalizeEconBody(raw.payload);
    if (Object.keys(inner).length) return Object.assign({}, raw, inner);
  }
  if (raw.body != null) {
    var inner2 = __r0yNormalizeEconBody(raw.body);
    if (Object.keys(inner2).length) return Object.assign({}, raw, inner2);
  }
  var series = raw.series || raw.alias || raw.seriesId || raw.series_id || raw.canonical_series_id || raw.symbol || raw.ticker || raw.id;
  if (series != null &amp;&amp; String(series).trim()) return Object.assign({}, raw, { series: String(series).trim() });
  return raw;
}
window.fetchEconData = function(body) {
  body = __r0yNormalizeEconBody(body);
  if (window.r0yNormalizeEconFetchBody) body = window.r0yNormalizeEconFetchBody(body);
  return new Promise(function(resolve) {
    var id = &quot;ec_&quot; + Math.random().toString(36).slice(2) + &quot;_&quot; + Date.now();
    var settled = false;
    function finishWithError(errMsg) {
      if (settled) return;
      settled = true;
      console.error(&quot;[InlineWidgetRuntime] econ-fetch:&quot;, errMsg, body);
      resolve({ ok: false, error: errMsg, points: [], data: [] });
    }
    var handler = function(e) {
      if (e.data &amp;&amp; e.data.type === &quot;R0Y_FETCH_ECON_RESULT&quot; &amp;&amp; e.data.id === id) {
        window.removeEventListener(&quot;message&quot;, handler);
        if (settled) return;
        if (e.data.error) {
          finishWithError(e.data.error);
          return;
        }
        settled = true;
        var raw = e.data.data;
        resolve(window.r0yNormalizeEconResult ? window.r0yNormalizeEconResult(raw) : raw);
      }
    };
    window.addEventListener(&quot;message&quot;, handler);
    parent.postMessage({ type: &quot;R0Y_FETCH_ECON&quot;, id: id, body: body || {} }, __r0y_allowed_origin || &quot;*&quot;);
    setTimeout(function() {
      window.removeEventListener(&quot;message&quot;, handler);
      finishWithError(&quot;Econ data request timeout&quot;);
    }, 45000);
  });
};
(function patchSandboxEdgeFetches() {
  var _origFetch = window.fetch;
  if (!_origFetch || _origFetch.__r0ySandboxFetchPatched) return;
  function parseBody(opts) {
    var body = {};
    try {
      if (opts &amp;&amp; opts.body) body = typeof opts.body === &quot;string&quot; ? JSON.parse(opts.body) : opts.body;
    } catch (eParse) {}
    return body;
  }
  function asResponse(json) {
    return { ok: true, status: 200, json: function() { return Promise.resolve(json); }, text: function() { return Promise.resolve(JSON.stringify(json)); } };
  }
  function asError(err) {
    var m = err &amp;&amp; err.message ? String(err.message) : &quot;Fetch failed&quot;;
    return { ok: true, status: 200, json: function() { return Promise.resolve({ error: m, points: [], data: [] }); }, text: function() { return Promise.resolve(JSON.stringify({ error: m })); } };
  }
  function patchedFetch(url, opts) {
    var u = String(url || &quot;&quot;);
    if (u.indexOf(&quot;/functions/v1/econ-fetch&quot;) !== -1) {
      return window.fetchEconData(parseBody(opts)).then(asResponse).catch(asError);
    }
    if (u.indexOf(&quot;/functions/v1/fmp-api-proxy&quot;) !== -1 || u.indexOf(&quot;/functions/v1/r0y-ai-router&quot;) !== -1) {
      var body = parseBody(opts);
      var endpoint = body.endpoint || body.path || &quot;&quot;;
      var params = body.params || {};
      return window.fetchMarketData(endpoint, params).then(asResponse).catch(asError);
    }
    if (u.indexOf(&quot;/functions/v1/lse-api-proxy&quot;) !== -1) {
      var lseBody = parseBody(opts);
      var lseEndpoint = lseBody.endpoint || lseBody.path || &quot;&quot;;
      var lseParams = lseBody.params || {};
      return window.fetchLseData(lseEndpoint, lseParams).then(asResponse).catch(asError);
    }
    return _origFetch.apply(this, arguments);
  }
  patchedFetch.__r0ySandboxFetchPatched = true;
  window.fetch = patchedFetch;
})();
window.fetchDataModeDataset = function(datasetId) {
  return new Promise(function(resolve, reject) {
    var id = &quot;dm_&quot; + Math.random().toString(36).slice(2) + &quot;_&quot; + Date.now();
    var handler = function(e) {
      if (e.data &amp;&amp; e.data.type === &quot;R0Y_FETCH_DATA_MODE_RESULT&quot; &amp;&amp; e.data.id === id) {
        window.removeEventListener(&quot;message&quot;, handler);
        if (e.data.error) {
          reject(new Error(e.data.error));
          return;
        }
        var d = e.data.data;
        if (d == null || typeof d !== &quot;object&quot;) {
          var msgNull = &quot;Data mode returned empty payload&quot;;
          reject(new Error(msgNull));
          return;
        }
        resolve(d);
      }
    };
    window.addEventListener(&quot;message&quot;, handler);
    parent.postMessage({ type: &quot;R0Y_FETCH_DATA_MODE&quot;, id: id, datasetId: String(datasetId || &quot;&quot;) }, __r0y_allowed_origin || &quot;*&quot;);
    setTimeout(function() {
      window.removeEventListener(&quot;message&quot;, handler);
      reject(new Error(&quot;Data mode dataset request timeout&quot;));
    }, 120000);
  });
};
// Runtime globals so AI-generated widgets never hit &quot;X is not defined&quot; for common formatters
window.formatCompactNumber = function(n) {
  if (n == null || isNaN(Number(n))) return &quot;—&quot;;
  var x = Number(n);
  if (Math.abs(x) &gt;= 1e9) return (x / 1e9).toFixed(1).replace(/\.0$/, &quot;&quot;) + &quot;B&quot;;
  if (Math.abs(x) &gt;= 1e6) return (x / 1e6).toFixed(1).replace(/\.0$/, &quot;&quot;) + &quot;M&quot;;
  if (Math.abs(x) &gt;= 1e3) return (x / 1e3).toFixed(1).replace(/\.0$/, &quot;&quot;) + &quot;K&quot;;
  return String(Math.round(x));
};
window.formatNumber = function(n, decimals) {
  if (n == null || isNaN(Number(n))) return &quot;—&quot;;
  var d = decimals != null ? decimals : 2;
  return Number(n).toLocaleString(void 0, { minimumFractionDigits: d, maximumFractionDigits: d });
};
window.formatPercent = function(n, decimals) {
  if (n == null || isNaN(Number(n))) return &quot;—%&quot;;
  var d = decimals != null ? decimals : 2;
  return Number(n).toFixed(d) + &quot;%&quot;;
};
window.safeToFixed = function(n, decimals) {
  if (n == null || isNaN(Number(n))) return &quot;—&quot;;
  var d = decimals != null ? decimals : 2;
  return Number(n).toFixed(d);
};
// Simple download helpers for AI widgets (Export CSV / JSON buttons)
window.__R0Y_downloadFile = function(filename, mime, text) {
  try {
    var blob = new Blob([text], { type: mime || 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename || 'export';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  } catch (e) {
    console.error('download failed', e);
  }
};
window.downloadJson = function(filename, data) {
  try {
    var safe = data;
    if (typeof safe === 'undefined') safe = null;
    var json = JSON.stringify(safe, null, 2);
    window.__R0Y_downloadFile(filename &amp;&amp; String(filename).trim() ? filename : 'export.json', 'application/json', json);
  } catch (e) {
    console.error('downloadJson failed', e);
  }
};
window.downloadCsv = function(filename, rows) {
  try {
    if (!rows || (Array.isArray(rows) &amp;&amp; rows.length === 0)) {
      window.__R0Y_downloadFile(filename || 'export.csv', 'text/csv', '');
      return;
    }
    var arr = Array.isArray(rows) ? rows : [rows];
    var isObj = typeof arr[0] === 'object' &amp;&amp; arr[0] !== null &amp;&amp; !Array.isArray(arr[0]);
    var csv = '';
    if (isObj) {
      var headers = Object.keys(arr[0]);
      csv += headers.join(',') + '\n';
      arr.forEach(function(row) {
        var line = headers.map(function(h) {
          var v = row[h];
          if (v == null) return '';
          var s = String(v).replace(/&quot;/g, '&quot;&quot;');
          if (s.search(/[&quot;,\n]/) &gt;= 0) s = '&quot;' + s + '&quot;';
          return s;
        }).join(',');
        csv += line + '\n';
      });
    } else {
      arr.forEach(function(v) {
        var s = String(v).replace(/&quot;/g, '&quot;&quot;');
        if (s.search(/[&quot;,\n]/) &gt;= 0) s = '&quot;' + s + '&quot;';
        csv += s + '\n';
      });
    }
    window.__R0Y_downloadFile(filename &amp;&amp; String(filename).trim() ? filename : 'export.csv', 'text/csv', csv);
  } catch (e) {
    console.error('downloadCsv failed', e);
  }
};
window.__R0Y_ROOT__ = window.__R0Y_ROOT__ || null;
window.__R0Y_RESIZE_OBSERVER__ = window.__R0Y_RESIZE_OBSERVER__ || null;
window.__R0Y_COMPONENT__ = window.__R0Y_COMPONENT__ || null;

// Safe date formatting: prevent &quot;Value 2d out of range for Date.prototype.toLocaleDateString options property year&quot; and invalid dates
(function() {
  var VALID_DATE_OPTS = { year: true, month: true, day: true, weekday: true, hour: true, minute: true, second: true, timeZoneName: true };
  var VALID_STYLE = { numeric: true, '2-digit': true, short: true, long: true, narrow: true };
  function sanitizeOptions(opts) {
    if (!opts || typeof opts !== 'object') return undefined;
    var out = {};
    for (var k in opts) {
      if (VALID_DATE_OPTS[k] &amp;&amp; VALID_STYLE[opts[k]]) out[k] = opts[k];
    }
    return Object.keys(out).length ? out : undefined;
  }
  function isValidDate(d) {
    return d instanceof Date &amp;&amp; !isNaN(d.getTime());
  }
  var NativeDate = Date;
  NativeDate.prototype.toLocaleDateString = function(locales, options) {
    try {
      if (!isValidDate(this)) return '—';
      var safe = sanitizeOptions(options);
      return NativeDate.prototype.toLocaleDateString.call(this, locales || 'en-US', safe || { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return '—';
    }
  };
  NativeDate.prototype.toLocaleTimeString = function(locales, options) {
    try {
      if (!isValidDate(this)) return '—';
      var safe = sanitizeOptions(options);
      return NativeDate.prototype.toLocaleTimeString.call(this, locales || 'en-US', safe || { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return '—';
    }
  };
  NativeDate.prototype.toLocaleString = function(locales, options) {
    try {
      if (!isValidDate(this)) return '—';
      var safe = sanitizeOptions(options);
      return NativeDate.prototype.toLocaleString.call(this, locales || 'en-US', safe || { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return '—';
    }
  };
})();
window.safeFormatDate = function(value) {
  if (value == null || value === '') return '—';
  try {
    var d = value instanceof Date ? value : new Date(value);
    if (isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return '—';
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    try {
      if (window.__R0Y_RESIZE_OBSERVER__) {
        try { window.__R0Y_RESIZE_OBSERVER__.disconnect(); } catch (e) {}
        window.__R0Y_RESIZE_OBSERVER__ = null;
      }
      var msg = 'Unknown error';
      try {
        if (error &amp;&amp; error.stack) msg = String(error.stack);
        else if (error &amp;&amp; error.message) msg = String(error.message);
        else if (error) msg = String(error);
      } catch (e0) {}
      try { console.error('[R0Y widget sandbox] render error', msg, info); } catch (logErr) {}
      parent.postMessage({ type: 'R0Y_RENDER_ERROR', error: msg }, __r0y_allowed_origin || '*');
    } catch (e) {}
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Catch non-React runtime errors so Debug has a useful stack trace.
try {
  window.addEventListener('error', function(ev) {
    try {
      var e = ev &amp;&amp; (ev.error || ev.reason);
      var msg = (e &amp;&amp; e.stack) ? String(e.stack) : String((ev &amp;&amp; ev.message) || (e &amp;&amp; (e.message || e)) || 'Unknown error');
      parent.postMessage({ type: 'R0Y_RENDER_ERROR', error: msg }, __r0y_allowed_origin || '*');
    } catch (e1) {}
  });
  window.addEventListener('unhandledrejection', function(ev) {
    try {
      var r = ev &amp;&amp; ev.reason;
      var msg = (r &amp;&amp; r.stack) ? String(r.stack) : String((r &amp;&amp; (r.message || r)) || 'Unhandled rejection');
      parent.postMessage({ type: 'R0Y_RENDER_ERROR', error: msg }, __r0y_allowed_origin || '*');
    } catch (e2) {}
  });
} catch (eH) {}

function r0ySanitizePolylinesInRoot() {
  try {
    var root = document.getElementById('root');
    if (!root || !root.querySelectorAll) return;
    var polys = root.querySelectorAll('polyline[points]');
    for (var i = 0; i &lt; polys.length; i++) {
      var el = polys[i];
      var pts = el.getAttribute('points') || '';
      if (pts.indexOf('NaN') &lt; 0 &amp;&amp; pts.indexOf('Infinity') &lt; 0 &amp;&amp; pts.indexOf('infinity') &lt; 0) continue;
      var tok = pts.trim().split(/[\s,]+/).filter(function(s) { return s.length &gt; 0; });
      var out = [];
      for (var j = 0; j + 1 &lt; tok.length; j += 2) {
        var x = parseFloat(tok[j]);
        var y = parseFloat(tok[j + 1]);
        out.push((Number.isFinite(x) ? x : 0) + ',' + (Number.isFinite(y) ? y : 0));
      }
      if (out.length) el.setAttribute('points', out.join(' '));
    }
    var paths = root.querySelectorAll('path[d]');
    for (var pi = 0; pi &lt; paths.length; pi++) {
      var pe = paths[pi];
      var d = pe.getAttribute('d') || '';
      if (!d) continue;
      if (/NaN|Infinity|undefined/i.test(d)) {
        pe.setAttribute('d', 'M0 0');
        continue;
      }
      if (typeof Path2D !== 'undefined') {
        try {
          new Path2D(d);
        } catch (pathErr) {
          pe.setAttribute('d', 'M0 0');
        }
      }
    }
  } catch (e) {}
}
function reportSize() {
  try {
    r0ySanitizePolylinesInRoot();
    const rootEl = document.getElementById('root');
    if (!rootEl) return;
    var w = rootEl.scrollWidth || rootEl.offsetWidth || 0;
    var h = rootEl.scrollHeight || rootEl.offsetHeight || 0;
    // Natural content bounds: widgets that don't stretch to 100% report their real
    // footprint so the host container can shrink-fit instead of keeping a fixed shell.
    try {
      var rr = rootEl.getBoundingClientRect();
      var maxR = 0, maxB = 0, kids = rootEl.children;
      for (var ci = 0; ci &lt; kids.length; ci++) {
        var cr = kids[ci].getBoundingClientRect();
        if (!cr || (cr.width === 0 &amp;&amp; cr.height === 0)) continue;
        if (cr.right - rr.left &gt; maxR) maxR = cr.right - rr.left;
        if (cr.bottom - rr.top &gt; maxB) maxB = cr.bottom - rr.top;
      }
      var clientH = rootEl.clientHeight || 0;
      var clientW = rootEl.clientWidth || 0;
      if (maxB &gt;= 120 &amp;&amp; clientH &gt; 0 &amp;&amp; maxB &lt; clientH - 24 &amp;&amp; rootEl.scrollHeight &lt;= clientH) h = Math.ceil(maxB);
      if (maxR &gt;= 200 &amp;&amp; clientW &gt; 0 &amp;&amp; maxR &lt; clientW - 24 &amp;&amp; rootEl.scrollWidth &lt;= clientW) w = Math.ceil(maxR);
    } catch (mbErr) {}
    w = Math.max(200, Math.min(2000, w));
    h = Math.max(200, Math.min(4000, h));
    if (window.__R0Y_SIZE_SENT__) return;
    window.__R0Y_PENDING_SIZE__ = { width: w, height: h };
    if (window.__R0Y_SIZE_TIMER__) clearTimeout(window.__R0Y_SIZE_TIMER__);
    window.__R0Y_SIZE_TIMER__ = setTimeout(function() {
      if (window.__R0Y_SIZE_SENT__ || !window.__R0Y_PENDING_SIZE__) return;
      var pending = window.__R0Y_PENDING_SIZE__;
      window.__R0Y_SIZE_SENT__ = true;
      parent.postMessage({ type: 'R0Y_CONTENT_SIZE', width: pending.width, height: pending.height }, __r0y_allowed_origin || '*');
      parent.postMessage({ type: 'R0Y_CONTENT_HEIGHT', height: pending.height }, __r0y_allowed_origin || '*');
    }, 450);
  } catch {}
}

function fixMalformedSvgPaths(code) {
  return code.replace(/\bd=([&quot;'])(\d+,\d+(?:\s+\d+,\d+)*)\1/g, function(_, q, coords) {
    var pts = coords.trim().split(/\s+/).map(function(p) { var n = p.split(&quot;,&quot;); return [Number(n[0])||0, Number(n[1])||0]; });
    if (!pts.length) return 'd=' + q + 'M 0 0' + q;
    var first = pts[0], path = 'M ' + first[0] + ' ' + first[1];
    for (var i = 1; i &lt; pts.length; i++) path += ' L ' + pts[i][0] + ' ' + pts[i][1];
    return 'd=' + q + path + q;
  });
}
function fixMapCallbackSyntax(code) {
  var out = code;
  out = out.replace(/\)\s*;\s*\)\s*\)\s*\}/g, '))}');
  out = out.replace(/\)\s+\)\s*\)\s*\}/g, '))}');
  out = out.replace(/\/&gt;\s*\)\s*\)\s*\)\s*\}/g, '/&gt;))}');
  return out;
}
window.r0yLayoutEligChildren = function(parent) {
  if (!parent) return [];
  return [].slice.call(parent.children).filter(function(n) {
    return n.nodeType === 1 &amp;&amp; n.tagName !== 'SCRIPT' &amp;&amp; n.tagName !== 'STYLE';
  });
};
window.r0yGetLayoutSectionParent = function() {
  var root = document.getElementById('root');
  if (!root) return null;
  var direct = window.r0yLayoutEligChildren(root);
  if (direct.length &gt;= 2) return root;
  if (direct.length === 1) {
    var inner = window.r0yLayoutEligChildren(direct[0]);
    if (inner.length &gt;= 2) return direct[0];
  }
  return null;
};
window.r0yListLayoutParents = function(root) {
  var out = [];
  function walk(node) {
    if (!node || node.nodeType !== 1) return;
    var tn = node.tagName;
    if (tn === 'SVG' || tn === 'SCRIPT' || tn === 'STYLE') return;
    var kids = window.r0yLayoutEligChildren(node);
    if (kids.length &gt;= 2) out.push(node);
    for (var i = 0; i &lt; kids.length; i++) walk(kids[i]);
  }
  walk(root);
  return out;
};
window.r0yTagAllLayoutSections = function(root) {
  if (!root) return;
  var parents = window.r0yListLayoutParents(root);
  for (var i = 0; i &lt; parents.length; i++) {
    var kids = window.r0yLayoutEligChildren(parents[i]);
    for (var j = 0; j &lt; kids.length; j++) kids[j].setAttribute('data-r0y-orig-index', String(j));
  }
};
window.r0yValidatePerm = function(perm, n) {
  if (!perm || perm.length !== n) return false;
  var seen = {};
  for (var i = 0; i &lt; n; i++) {
    var x = perm[i];
    if (typeof x !== 'number' || x !== x || x &lt; 0 || x &gt;= n || seen[x]) return false;
    seen[x] = true;
  }
  return true;
};
window.r0yApplyPermutationToParent = function(parent, perm) {
  var kids = window.r0yLayoutEligChildren(parent);
  if (kids.length &lt; 2 || !window.r0yValidatePerm(perm, kids.length)) return;
  var byIdx = {};
  for (var k = 0; k &lt; kids.length; k++) {
    var el = kids[k];
    var idx = parseInt(el.getAttribute('data-r0y-orig-index') || '-1', 10);
    if (idx &gt;= 0) byIdx[idx] = el;
  }
  var frag = document.createDocumentFragment();
  for (var t = 0; t &lt; perm.length; t++) {
    var node = byIdx[perm[t]];
    if (node) frag.appendChild(node);
  }
  parent.appendChild(frag);
};
window.r0yApplyNestedLayoutOrders = function(root, orders) {
  if (!root || !orders || !orders.length) return;
  var parents = window.r0yListLayoutParents(root);
  for (var i = 0; i &lt; parents.length &amp;&amp; i &lt; orders.length; i++) {
    var perm = orders[i];
    if (!perm || !perm.length) continue;
    window.r0yApplyPermutationToParent(parents[i], perm);
  }
};
window.r0yApplyLayoutSectionOrder = function(order) {
  var par = window.r0yGetLayoutSectionParent &amp;&amp; window.r0yGetLayoutSectionParent();
  if (!par || !order || !order.length) return;
  window.r0yApplyPermutationToParent(par, order);
};
window.r0yReadNestedLayoutOrders = function() {
  var root = document.getElementById('root');
  if (!root) return null;
  var parents = window.r0yListLayoutParents(root);
  return parents.map(function(p) {
    var kids = window.r0yLayoutEligChildren(p);
    return kids.map(function(el) { return parseInt(el.getAttribute('data-r0y-orig-index') || '0', 10); });
  });
};
var __r0y_last_label_patches = null;
var __r0y_last_fill_patches = null;
var __r0y_last_cosmetic_css = '';
function r0yApplyCosmeticCss(css) {
  var text = typeof css === 'string' ? css : '';
  __r0y_last_cosmetic_css = text;
  var styleEl = document.getElementById('r0y-cosmetic-overlay') || document.getElementById('r0y-cosmetic-revamp');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'r0y-cosmetic-overlay';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = text;
  return text.trim().length &gt; 0;
}
window.r0yResolveChildPath = function(root, pathArr) {
  if (!root || !pathArr || pathArr.length === 0) return null;
  var n = root;
  for (var i = 0; i &lt; pathArr.length; i++) {
    var kids = window.r0yLayoutEligChildren(n);
    n = kids[pathArr[i]];
    if (!n) return null;
  }
  return n;
};
window.r0yPathKeyFromEl = function(el, root) {
  if (!el || !root || !root.contains(el)) return null;
  var parts = [];
  var cur = el;
  while (cur &amp;&amp; cur !== root) {
    var p = cur.parentElement;
    if (!p || !root.contains(p)) return null;
    var kids = window.r0yLayoutEligChildren(p);
    var ix = kids.indexOf(cur);
    if (ix &lt; 0) return null;
    parts.unshift(ix);
    cur = p;
  }
  return parts.length ? parts.join('.') : null;
};
window.r0yApplyLabelPatches = function(root, patches) {
  if (!root || !patches || typeof patches !== 'object') return;
  for (var k in patches) {
    if (!Object.prototype.hasOwnProperty.call(patches, k)) continue;
    var segs = String(k).split('.');
    var path = [];
    for (var si = 0; si &lt; segs.length; si++) {
      var num = parseInt(segs[si], 10);
      if (num !== num || num &lt; 0) { path = null; break; }
      path.push(num);
    }
    if (!path || !path.length) continue;
    var node = window.r0yResolveChildPath(root, path);
    if (node &amp;&amp; patches[k] != null) node.textContent = String(patches[k]);
  }
};
window.r0yApplyFillToNode = function(node, col) {
  if (!node) return;
  var c = String(col || '');
  if (c === 'transparent' || c === '') {
    node.style.removeProperty('background-color');
    node.style.removeProperty('background-image');
    node.style.removeProperty('background');
  } else {
    node.style.setProperty('background-image', 'none', 'important');
    node.style.setProperty('background-color', c, 'important');
  }
};
window.r0yApplyFillPatches = function(root, patches) {
  if (!root || !patches || typeof patches !== 'object') return;
  for (var k in patches) {
    if (!Object.prototype.hasOwnProperty.call(patches, k)) continue;
    var segs = String(k).split('.');
    var path = [];
    for (var si = 0; si &lt; segs.length; si++) {
      var num = parseInt(segs[si], 10);
      if (num !== num || num &lt; 0) { path = null; break; }
      path.push(num);
    }
    if (!path || !path.length) continue;
    var node = window.r0yResolveChildPath(root, path);
    if (!node || patches[k] == null) continue;
    window.r0yApplyFillToNode(node, patches[k]);
  }
};
window.r0yClearRemovedFillPatches = function(root, prev, next) {
  if (!root || !prev || typeof prev !== 'object') return;
  var nxt = next &amp;&amp; typeof next === 'object' ? next : {};
  for (var k in prev) {
    if (!Object.prototype.hasOwnProperty.call(prev, k)) continue;
    if (Object.prototype.hasOwnProperty.call(nxt, k)) continue;
    var segs = String(k).split('.');
    var path = [];
    for (var si = 0; si &lt; segs.length; si++) {
      var num = parseInt(segs[si], 10);
      if (num !== num || num &lt; 0) { path = null; break; }
      path.push(num);
    }
    if (!path || !path.length) continue;
    var node = window.r0yResolveChildPath(root, path);
    if (node) window.r0yApplyFillToNode(node, 'transparent');
  }
};
window.__r0y_observer_paused = false;
window.__r0y_patch_mo_installed = false;
window.r0yReapplyStoredAppearancePatches = function() {
  var r = document.getElementById('root');
  if (!r) return;
  window.__r0y_observer_paused = true;
  try {
    if (__r0y_last_fill_patches &amp;&amp; typeof __r0y_last_fill_patches === 'object' &amp;&amp; window.r0yApplyFillPatches) {
      if (Object.keys(__r0y_last_fill_patches).length) window.r0yApplyFillPatches(r, __r0y_last_fill_patches);
    }
    if (__r0y_last_label_patches &amp;&amp; typeof __r0y_last_label_patches === 'object' &amp;&amp; window.r0yApplyLabelPatches) {
      if (Object.keys(__r0y_last_label_patches).length) window.r0yApplyLabelPatches(r, __r0y_last_label_patches);
    }
  } catch (eR) {}
  window.__r0y_observer_paused = false;
};
/**
 * Only reapply patches when the mutation touches a subtree we actually patched.
 * Ignores chart SVG/canvas hovers and floating tooltips that don't contain any patched node,
 * so we don't lag — but still catches React wiping a painted panel when sibling metrics update.
 * Also ignores mutations on a shared ancestor that contains BOTH an &lt;svg&gt; chart and a painted
 * panel outside that svg (typical dashboard layout): graph hover only churns that shell, not the card.
 */
window.r0yMutationTouchesStoredPatches = function(root, records) {
  if (!root || !records || !records.length) return false;
  var keySet = {};
  if (__r0y_last_fill_patches &amp;&amp; typeof __r0y_last_fill_patches === 'object') {
    for (var fk in __r0y_last_fill_patches) {
      if (Object.prototype.hasOwnProperty.call(__r0y_last_fill_patches, fk)) keySet[fk] = true;
    }
  }
  if (__r0y_last_label_patches &amp;&amp; typeof __r0y_last_label_patches === 'object') {
    for (var lk in __r0y_last_label_patches) {
      if (Object.prototype.hasOwnProperty.call(__r0y_last_label_patches, lk)) keySet[lk] = true;
    }
  }
  var keyList = [];
  for (var k in keySet) keyList.push(k);
  if (!keyList.length) return false;

  for (var r = 0; r &lt; records.length; r++) {
    var t = records[r].target;
    if (!t) continue;
    var el = t.nodeType === 1 ? t : t.parentElement;
    if (!el || !el.closest) continue;
    if (el.closest('svg') || el.closest('canvas')) continue;

    for (var ki = 0; ki &lt; keyList.length; ki++) {
      var segs = String(keyList[ki]).split('.');
      var path = [];
      var pathOk = true;
      for (var si = 0; si &lt; segs.length; si++) {
        var num = parseInt(segs[si], 10);
        if (num !== num || num &lt; 0) {
          pathOk = false;
          break;
        }
        path.push(num);
      }
      if (!pathOk || !path.length) continue;
      var node = window.r0yResolveChildPath(root, path);
      if (!node) continue;
      if (el === node) return true;
      if (node.contains &amp;&amp; node.contains(el)) return true;
      if (el.contains &amp;&amp; el.contains(node)) {
        var nodeInChart = node.closest &amp;&amp; (node.closest('svg') || node.closest('canvas'));
        if (el !== root) {
          var chartEl =
            el.querySelector &amp;&amp; (el.querySelector('svg') || el.querySelector('canvas'));
          if (chartEl &amp;&amp; !nodeInChart) continue;
        }
        return true;
      }
    }
  }
  return false;
};
window.r0yEnsurePatchReapplyObserver = function() {
  if (window.__r0y_patch_mo_installed) return;
  var root = document.getElementById('root');
  if (!root) return;
  window.__r0y_patch_mo_installed = true;
  var rafId = null;
  function scheduleFromMutations(records) {
    if (window.__r0y_observer_paused) return;
    var rt = document.getElementById('root');
    if (!rt || !window.r0yMutationTouchesStoredPatches(rt, records)) return;
    if (rafId != null) return;
    rafId = requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        rafId = null;
        var hasF =
          __r0y_last_fill_patches &amp;&amp;
          typeof __r0y_last_fill_patches === 'object' &amp;&amp;
          Object.keys(__r0y_last_fill_patches).length;
        var hasL =
          __r0y_last_label_patches &amp;&amp;
          typeof __r0y_last_label_patches === 'object' &amp;&amp;
          Object.keys(__r0y_last_label_patches).length;
        if (!hasF &amp;&amp; !hasL) return;
        if (window.r0yReapplyStoredAppearancePatches) window.r0yReapplyStoredAppearancePatches();
      });
    });
  }
  try {
    var mo = new MutationObserver(function(recs) {
      scheduleFromMutations(recs);
    });
    mo.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
    window.__r0y_patch_mo = mo;
  } catch (eMo) {}
};
window.r0yLayoutBlockMeetsMinSize = function(block) {
  try {
    var r = block.getBoundingClientRect();
    return r.width &gt;= 2 &amp;&amp; r.height &gt;= 2;
  } catch (e) { return true; }
};
/** Reorder targets must be real tiles/cards, not typography or tiny text wrappers. */
window.r0yLayoutBlockIsDragTile = function(block) {
  try {
    var tn = block.tagName;
    if (tn === 'SPAN' || tn === 'P' || tn === 'LABEL' || tn === 'I' || tn === 'EM' || tn === 'B' || tn === 'STRONG' || tn === 'CODE' || tn === 'TIME') return false;
    if (tn === 'H1' || tn === 'H2' || tn === 'H3' || tn === 'H4' || tn === 'H5' || tn === 'H6') return false;
    var r = block.getBoundingClientRect();
    var a = r.width * r.height;
    if (r.width &lt; 44 || r.height &lt; 20 || a &lt; 1600) return false;
    return true;
  } catch (e) { return false; }
};
window.r0yFindReorderCtx = function(target) {
  var root = document.getElementById('root');
  if (!root || !target) return null;
  var leaf = target.nodeType === 1 ? target : target.parentElement;
  if (!leaf || !root.contains(leaf)) return null;
  var node = leaf;
  while (node &amp;&amp; node !== root) {
    var p = node.parentElement;
    if (!p || !root.contains(p)) break;
    var ptn = p.tagName;
    if (ptn === 'SCRIPT' || ptn === 'STYLE') { node = p; continue; }
    var sibs = window.r0yLayoutEligChildren(p);
    if (sibs.length &gt;= 2) {
      var block = leaf;
      while (block &amp;&amp; block.parentElement !== p) block = block.parentElement;
      if (block &amp;&amp; block.parentElement === p &amp;&amp; sibs.indexOf(block) &gt;= 0) {
        if (window.r0yLayoutBlockIsDragTile &amp;&amp; !window.r0yLayoutBlockIsDragTile(block)) {
          node = p;
          continue;
        }
        return { parent: p, block: block, siblings: sibs };
      }
    }
    node = p;
  }
  return null;
};
/** Siblings are tab-like controls → reorder individual tabs, not the whole nav bar. */
window.r0yParentLooksLikeTabStrip = function(parent) {
  if (!parent) return false;
  if (parent.getAttribute &amp;&amp; parent.getAttribute('role') === 'tablist') return true;
  var kids = window.r0yLayoutEligChildren(parent);
  if (kids.length &lt; 2) return false;
  var tabLike = 0;
  for (var ti = 0; ti &lt; kids.length; ti++) {
    var k = kids[ti];
    var tn = k.tagName;
    if (tn === 'BUTTON' || tn === 'A') tabLike++;
    else if (k.getAttribute &amp;&amp; k.getAttribute('role') === 'tab') tabLike++;
  }
  return tabLike &gt;= 2 &amp;&amp; tabLike &gt;= Math.ceil(kids.length * 0.55);
};
/** Large empty shell (no charts, controls, meaningful text) — not a draggable “panel”. */
window.r0yBlockLooksLikeEmptyBackdrop = function(block) {
  if (!block) return false;
  try {
    var r = block.getBoundingClientRect();
    if (r.width * r.height &lt; 8000) return false;
    if (
      block.querySelector(
        'svg,canvas,button,a,input,select,textarea,[role=&quot;tab&quot;],[role=&quot;button&quot;],[role=&quot;menuitem&quot;],[role=&quot;link&quot;]',
      )
    )
      return false;
    var txt = (block.textContent || '').replace(/s+/g, ' ').trim();
    if (txt.length &gt; 20) return false;
    return true;
  } catch (eB) {
    return false;
  }
};
/** Single full-bleed child of #root — widget chrome / background, not a layout section to grab. */
window.r0yBlockIsFullBleedRootShell = function(block, root) {
  if (!block || !root || block === root) return true;
  if (block.parentElement !== root) return false;
  var ch = window.r0yLayoutEligChildren(root);
  if (ch.length !== 1 || ch[0] !== block) return false;
  try {
    var br = block.getBoundingClientRect();
    var rr = root.getBoundingClientRect();
    var ra = rr.width * rr.height;
    if (ra &lt; 100) return false;
    var ratioW = br.width / Math.max(1, rr.width);
    var ratioH = br.height / Math.max(1, rr.height);
    if (ratioW &gt; 0.9 &amp;&amp; ratioH &gt; 0.9 &amp;&amp; br.width * br.height &gt; ra * 0.82) return true;
  } catch (eS) {}
  return false;
};
window.r0yGrabTileOk = function(block, parent) {
  if (window.r0yLayoutBlockIsDragTile &amp;&amp; window.r0yLayoutBlockIsDragTile(block)) return true;
  if (!parent || !window.r0yParentLooksLikeTabStrip(parent) || block.parentElement !== parent) return false;
  var btn = block.tagName;
  var rt = block.getAttribute &amp;&amp; block.getAttribute('role') === 'tab';
  if (btn !== 'BUTTON' &amp;&amp; btn !== 'A' &amp;&amp; !rt) return false;
  try {
    var tr = block.getBoundingClientRect();
    return tr.width &gt;= 22 &amp;&amp; tr.height &gt;= 16 &amp;&amp; tr.width * tr.height &gt;= 320;
  } catch (eT) {
    return false;
  }
};
/**
 * Drop only *large* wrappers that contain another candidate (area ratio), so shell/background loses to
 * panels but a KPI card is not discarded when it barely wraps a similar-sized column.
 */
window.r0yFilterContainedReorderCandidates = function(items) {
  if (!items || items.length &lt; 2) return items;
  var out = [];
  var ratioMin = 1.85;
  for (var i = 0; i &lt; items.length; i++) {
    var bi = items[i].ctx.block;
    if (!bi) continue;
    var isOuter = false;
    for (var j = 0; j &lt; items.length; j++) {
      if (i === j) continue;
      var bj = items[j].ctx.block;
      if (!bj || bi === bj) continue;
      try {
        if (!bi.contains(bj)) continue;
        var ai = items[i].area;
        var aj = items[j].area;
        if (ai &gt; aj * ratioMin) {
          isOuter = true;
          break;
        }
      } catch (eC) {}
    }
    if (!isOuter) out.push(items[i]);
  }
  return out.length ? out : items;
};
/**
 * Under the pointer: skip root shell + empty backdrops; tab strips → smallest target (one tab);
 * otherwise prefer largest tile among innermost candidates (not an ancestor that wraps another target).
 */
window.r0yFindReorderCtxAtPoint = function(clientX, clientY) {
  var root = document.getElementById('root');
  if (!root) return null;
  var stack;
  try {
    stack = document.elementsFromPoint(clientX, clientY);
  } catch (e0) {
    return null;
  }
  if (!stack || !stack.length) return null;
  var bucket = [];
  var seenBlock = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
  var seenFallback = seenBlock ? null : {};
  for (var i = 0; i &lt; stack.length; i++) {
    var el = stack[i];
    if (!el || el.nodeType !== 1) continue;
    if (!root.contains(el)) continue;
    if (el === root) continue;
    if (el.classList &amp;&amp; (el.classList.contains('r0y-layout-drag-ghost') || el.classList.contains('r0y-layout-sec-ol')))
      continue;
    var tn = el.tagName;
    if (tn === 'SVG' || tn === 'PATH' || tn === 'G' || tn === 'RECT' || tn === 'CIRCLE' || tn === 'LINE' || tn === 'TEXT')
      continue;
    var ctx = window.r0yFindReorderCtx(el);
    if (!ctx || !ctx.block) continue;
    if (ctx.block === root) continue;
    if (window.r0yBlockIsFullBleedRootShell &amp;&amp; window.r0yBlockIsFullBleedRootShell(ctx.block, root)) continue;
    if (seenBlock) {
      if (seenBlock.has(ctx.block)) continue;
      seenBlock.add(ctx.block);
    } else {
      var bid = ctx.block.getAttribute &amp;&amp; ctx.block.getAttribute('data-r0y-orig-index');
      var fid = bid != null ? bid : String(ctx.block);
      if (seenFallback[fid]) continue;
      seenFallback[fid] = true;
    }
    if (!window.r0yGrabTileOk(ctx.block, ctx.parent)) continue;
    if (window.r0yBlockLooksLikeEmptyBackdrop &amp;&amp; window.r0yBlockLooksLikeEmptyBackdrop(ctx.block)) continue;
    try {
      var rr = ctx.block.getBoundingClientRect();
      if (clientX &lt; rr.left || clientX &gt; rr.right || clientY &lt; rr.top || clientY &gt; rr.bottom) continue;
      var a = rr.width * rr.height;
      bucket.push({ ctx: ctx, area: a, parent: ctx.parent });
    } catch (e1) {}
  }
  if (!bucket.length) return null;
  var tabC = [];
  var otherC = [];
  for (var bi = 0; bi &lt; bucket.length; bi++) {
    var b = bucket[bi];
    if (window.r0yParentLooksLikeTabStrip(b.parent)) tabC.push(b);
    else otherC.push(b);
  }
  if (tabC.length) {
    tabC.sort(function(x, y) {
      return x.area - y.area;
    });
    return tabC[0].ctx;
  }
  otherC = window.r0yFilterContainedReorderCandidates ? window.r0yFilterContainedReorderCandidates(otherC) : otherC;
  otherC.sort(function(x, y) {
    return y.area - x.area;
  });
  return otherC[0].ctx;
};
(function() {
  var grabOn = false;
  var hiSec = null;
  var dragCtx = null;
  var pointersDown = {};
  var suppressNextClick = false;
  document.addEventListener('click', function(ev) {
    if (!suppressNextClick) return;
    suppressNextClick = false;
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();
  }, true);
  function pointerTargetEl(ev) {
    var t = ev.target;
    if (!t) return null;
    if (t.nodeType === 3) return t.parentElement;
    return t;
  }
  function clearHi() {
    if (hiSec) {
      var old = hiSec.querySelector &amp;&amp; hiSec.querySelector('.r0y-layout-sec-ol');
      if (old) old.remove();
      hiSec.classList.remove('r0y-layout-sec-hi');
      hiSec = null;
    }
  }
  function ensureOl(el) {
    if (!el.querySelector || el.querySelector('.r0y-layout-sec-ol')) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'r0y-layout-sec-ol');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '0.5');
    rect.setAttribute('y', '0.5');
    rect.setAttribute('width', '99');
    rect.setAttribute('height', '99');
    rect.setAttribute('rx', '4');
    rect.setAttribute('fill', 'none');
    rect.setAttribute('stroke', 'rgba(255,255,255,0.32)');
    rect.setAttribute('stroke-width', '1');
    rect.setAttribute('stroke-dasharray', '5 4');
    rect.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(rect);
    el.appendChild(svg);
  }
  function setHiAtPoint(clientX, clientY) {
    var ctx = window.r0yFindReorderCtxAtPoint &amp;&amp; window.r0yFindReorderCtxAtPoint(clientX, clientY);
    if (!ctx || !ctx.block) {
      clearHi();
      return;
    }
    if (hiSec === ctx.block) return;
    clearHi();
    hiSec = ctx.block;
    hiSec.classList.add('r0y-layout-sec-hi');
    ensureOl(hiSec);
  }
  function findDropSibling(parent, movingBlock, clientX, clientY) {
    var kids = window.r0yLayoutEligChildren(parent);
    if (kids.length &lt; 2) return null;
    try {
      var selfR = movingBlock.getBoundingClientRect();
      if (
        clientX &gt;= selfR.left &amp;&amp;
        clientX &lt;= selfR.right &amp;&amp;
        clientY &gt;= selfR.top &amp;&amp;
        clientY &lt;= selfR.bottom
      ) {
        return null;
      }
    } catch (eSelf) {}
    var stack = document.elementsFromPoint(clientX, clientY);
    for (var i = 0; i &lt; stack.length; i++) {
      var n = stack[i];
      if (!n || n.nodeType !== 1) continue;
      if (n.classList &amp;&amp; n.classList.contains('r0y-layout-drag-ghost')) continue;
      var el = n;
      while (el &amp;&amp; el !== parent) {
        if (el.parentElement === parent &amp;&amp; kids.indexOf(el) &gt;= 0) {
          if (el !== movingBlock &amp;&amp; !movingBlock.contains(el)) return el;
          break;
        }
        el = el.parentElement;
      }
    }
    for (var j = 0; j &lt; kids.length; j++) {
      if (kids[j] !== movingBlock) {
        try {
          var r = kids[j].getBoundingClientRect();
          if (clientY &gt;= r.top &amp;&amp; clientY &lt;= r.bottom &amp;&amp; clientX &gt;= r.left &amp;&amp; clientX &lt;= r.right) return kids[j];
        } catch (e2) {}
      }
    }
    try {
      var pr = parent.getBoundingClientRect();
      if (clientX &lt; pr.left || clientX &gt; pr.right || clientY &lt; pr.top || clientY &gt; pr.bottom) return null;
    } catch (e5) { return null; }
    var best = null;
    var bestD = 1e12;
    for (var k = 0; k &lt; kids.length; k++) {
      if (kids[k] === movingBlock) continue;
      try {
        var r2 = kids[k].getBoundingClientRect();
        var midY = (r2.top + r2.bottom) * 0.5;
        var midX = (r2.left + r2.right) * 0.5;
        var d = Math.abs(clientY - midY) * 1.2 + Math.abs(clientX - midX);
        if (d &lt; bestD) { bestD = d; best = kids[k]; }
      } catch (e4) {}
    }
    return best;
  }
  function cleanupDragChrome(moving) {
    if (!moving) return;
    try {
      if (moving.block &amp;&amp; moving.pointerId != null) moving.block.releasePointerCapture(moving.pointerId);
    } catch (e) {}
    if (moving.block) moving.block.style.opacity = '';
    if (moving.ghost &amp;&amp; moving.ghost.parentNode) moving.ghost.parentNode.removeChild(moving.ghost);
    document.body.classList.remove('r0y-layout-grabbing');
    document.body.style.cursor = grabOn ? 'grab' : '';
  }
  function onPointerMove(ev) {
    if (!grabOn) return;
    if (dragCtx) {
      if (dragCtx.ghost) {
        dragCtx.ghost.style.left = (ev.clientX - dragCtx.offX) + 'px';
        dragCtx.ghost.style.top = (ev.clientY - dragCtx.offY) + 'px';
      }
      return;
    }
    var pelM = pointerTargetEl(ev);
    if (pelM &amp;&amp; pelM.closest &amp;&amp; (pelM.closest('svg') || pelM.closest('canvas'))) {
      clearHi();
      return;
    }
    setHiAtPoint(ev.clientX, ev.clientY);
  }
  function beginDragReorder(ctx, clientX, clientY, pointerId) {
    if (!ctx || !ctx.block) return;
    clearHi();
    var block = ctx.block;
    var br = block.getBoundingClientRect();
    var ghost = block.cloneNode(true);
    ghost.classList.add('r0y-layout-drag-ghost');
    ghost.classList.remove('r0y-layout-sec-hi');
    var ghOls = ghost.querySelectorAll('.r0y-layout-sec-ol');
    for (var gi = 0; gi &lt; ghOls.length; gi++) ghOls[gi].remove();
    document.body.appendChild(ghost);
    ghost.style.left = br.left + 'px';
    ghost.style.top = br.top + 'px';
    ghost.style.width = Math.max(br.width, 40) + 'px';
    var maxH = Math.min(br.height, window.innerHeight * 0.72);
    ghost.style.height = maxH + 'px';
    block.style.opacity = '0.28';
    dragCtx = {
      parent: ctx.parent,
      block: block,
      ghost: ghost,
      offX: clientX - br.left,
      offY: clientY - br.top,
      pointerId: pointerId
    };
    try {
      block.setPointerCapture(pointerId);
    } catch (e3) {}
    document.body.classList.add('r0y-layout-grabbing');
    document.body.style.cursor = 'grabbing';
  }
  function onPointerDown(ev) {
    if (!grabOn || ev.button !== 0) return;
    pointersDown[ev.pointerId] = true;
    var rootEl = document.getElementById('root');
    var pel = pointerTargetEl(ev);
    if (!rootEl || !pel || !rootEl.contains(pel)) return;
    if (pel.closest &amp;&amp; (pel.closest('svg') || pel.closest('canvas'))) return;
    var ctx = window.r0yFindReorderCtxAtPoint &amp;&amp; window.r0yFindReorderCtxAtPoint(ev.clientX, ev.clientY);
    if (!ctx || !ctx.block) return;
    ev.preventDefault();
    ev.stopPropagation();
    suppressNextClick = true;
    beginDragReorder(ctx, ev.clientX, ev.clientY, ev.pointerId);
  }
  function onPointerUp(ev) {
    delete pointersDown[ev.pointerId];
    if (!grabOn) return;
    if (!dragCtx || ev.pointerId !== dragCtx.pointerId) return;
    var moving = dragCtx;
    dragCtx = null;
    var px = ev.clientX;
    var py = ev.clientY;
    cleanupDragChrome(moving);
    if (!moving.block || !moving.parent || !moving.parent.contains(moving.block)) { clearHi(); return; }
    var toEl = findDropSibling(moving.parent, moving.block, px, py);
    var fromEl = moving.block;
    var p = moving.parent;
    if (toEl &amp;&amp; fromEl &amp;&amp; toEl !== fromEl) {
      var kids = window.r0yLayoutEligChildren(p);
      var fromIdx = kids.indexOf(fromEl);
      var toIdx = kids.indexOf(toEl);
      if (fromIdx &gt;= 0 &amp;&amp; toIdx &gt;= 0) {
        if (fromIdx &lt; toIdx) p.insertBefore(fromEl, toEl.nextSibling);
        else p.insertBefore(fromEl, toEl);
      }
      var nested = window.r0yReadNestedLayoutOrders &amp;&amp; window.r0yReadNestedLayoutOrders();
      if (nested &amp;&amp; nested.length) parent.postMessage({ type: 'R0Y_LAYOUT_ORDER_COMMIT', nestedOrders: nested }, __r0y_allowed_origin || '*');
    }
    clearHi();
  }
  function onPointerCancel(ev) {
    delete pointersDown[ev.pointerId];
    if (!grabOn || !dragCtx || ev.pointerId !== dragCtx.pointerId) return;
    var moving = dragCtx;
    dragCtx = null;
    cleanupDragChrome(moving);
    clearHi();
  }
  window.addEventListener('message', function(e) {
    if (!e.data) return;
    if (e.data.type === 'R0Y_LAYOUT_GRAB_MODE') {
      grabOn = e.data.active === true;
      if (grabOn) document.documentElement.classList.add('r0y-grab-mode');
      else document.documentElement.classList.remove('r0y-grab-mode');
      if (!grabOn) {
        clearHi();
        if (dragCtx) {
          cleanupDragChrome(dragCtx);
          dragCtx = null;
        }
      }
      document.body.style.cursor = grabOn ? 'grab' : '';
    }
    if (e.data.type === 'R0Y_SET_LAYOUT_ORDER') {
      try {
        var rootLo = document.getElementById('root');
        // Retagging would reset data-r0y-orig-index to current DOM order and undo orders from
        // R0Y_LAYOUT_ORDER_COMMIT. Only tag when sections were never stamped (race before R0Y_RENDER rAF).
        var needLayoutTags = false;
        if (rootLo &amp;&amp; window.r0yListLayoutParents &amp;&amp; window.r0yLayoutEligChildren) {
          var pl = window.r0yListLayoutParents(rootLo);
          for (var pi = 0; pi &lt; pl.length; pi++) {
            var ks = window.r0yLayoutEligChildren(pl[pi]);
            for (var ki = 0; ki &lt; ks.length; ki++) {
              if (!ks[ki].getAttribute || ks[ki].getAttribute('data-r0y-orig-index') == null) {
                needLayoutTags = true;
                break;
              }
            }
            if (needLayoutTags) break;
          }
        }
        if (needLayoutTags &amp;&amp; rootLo &amp;&amp; window.r0yTagAllLayoutSections) window.r0yTagAllLayoutSections(rootLo);
        if (e.data.nestedOrders &amp;&amp; e.data.nestedOrders.length &amp;&amp; window.r0yApplyNestedLayoutOrders) {
          window.r0yApplyNestedLayoutOrders(rootLo, e.data.nestedOrders);
        } else if (e.data.order &amp;&amp; e.data.order.length &amp;&amp; window.r0yApplyLayoutSectionOrder) {
          window.r0yApplyLayoutSectionOrder(e.data.order);
        }
        requestAnimationFrame(function() {
          try {
            if (__r0y_last_label_patches &amp;&amp; rootLo &amp;&amp; window.r0yApplyLabelPatches) {
              window.r0yApplyLabelPatches(rootLo, __r0y_last_label_patches);
            }
            if (__r0y_last_fill_patches &amp;&amp; rootLo &amp;&amp; window.r0yApplyFillPatches) {
              window.r0yApplyFillPatches(rootLo, __r0y_last_fill_patches);
            }
            if (window.r0yEnsurePatchReapplyObserver) window.r0yEnsurePatchReapplyObserver();
          } catch (e2) {}
          reportSize();
        });
      } catch (x) {}
    }
    if (e.data.type === 'R0Y_SET_LABEL_PATCHES') {
      try {
        __r0y_last_label_patches = e.data.patches &amp;&amp; typeof e.data.patches === 'object' ? e.data.patches : null;
        var rootLp = document.getElementById('root');
        if (rootLp &amp;&amp; window.r0yApplyLabelPatches) window.r0yApplyLabelPatches(rootLp, __r0y_last_label_patches);
        if (window.r0yEnsurePatchReapplyObserver) window.r0yEnsurePatchReapplyObserver();
        requestAnimationFrame(reportSize);
      } catch (x) {}
    }
    if (e.data.type === 'R0Y_SET_FILL_PATCHES') {
      try {
        var rootFp = document.getElementById('root');
        var prevFp = __r0y_last_fill_patches &amp;&amp; typeof __r0y_last_fill_patches === 'object' ? __r0y_last_fill_patches : null;
        var nextFp = e.data.patches &amp;&amp; typeof e.data.patches === 'object' ? e.data.patches : {};
        if (rootFp &amp;&amp; prevFp &amp;&amp; window.r0yClearRemovedFillPatches) window.r0yClearRemovedFillPatches(rootFp, prevFp, nextFp);
        __r0y_last_fill_patches = Object.keys(nextFp).length ? nextFp : null;
        if (rootFp &amp;&amp; window.r0yApplyFillPatches) window.r0yApplyFillPatches(rootFp, nextFp);
        if (window.r0yEnsurePatchReapplyObserver) window.r0yEnsurePatchReapplyObserver();
        requestAnimationFrame(reportSize);
      } catch (x) {}
    }
    if (e.data.type === 'R0Y_SET_COSMETIC_STYLE') {
      try {
        var css = typeof e.data.css === 'string' ? e.data.css : '';
        if (!r0yApplyCosmeticCss(css)) return;
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            try {
              parent.postMessage({ type: 'R0Y_COSMETIC_STYLE_APPLIED' }, __r0y_allowed_origin || '*');
            } catch (x2) {}
          });
        });
        requestAnimationFrame(reportSize);
      } catch (x) {}
    }
  });
  document.addEventListener('pointermove', onPointerMove, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('pointerup', onPointerUp, true);
  document.addEventListener('pointercancel', onPointerCancel, true);
})();
(function() {
  var labelEditOn = false;
  var activeEl = null;
  var origText = '';
  var finishing = false;
  function isLikelyMetricOnly(el) {
    var t = (el.textContent || '').trim();
    if (!t) return true;
    if (/[a-zA-Z]{3,}/.test(t)) return false;
    if (/^-?[\d,.$€£¥%\s+−–]+$/.test(t) &amp;&amp; /\d/.test(t)) return true;
    return false;
  }
  function findHost(target) {
    var root = document.getElementById('root');
    if (!root || !target) return null;
    var skip = { SVG: 1, PATH: 1, SCRIPT: 1, STYLE: 1, IFRAME: 1, CANVAS: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1 };
    var cur = target.nodeType === 1 ? target : target.parentElement;
    if (!cur || !root.contains(cur)) return null;
    var candidates = [];
    var depth = 0;
    while (cur &amp;&amp; root.contains(cur) &amp;&amp; depth &lt; 22) {
      if (cur.nodeType === 1) {
        var tn = cur.tagName;
        if (skip[tn]) return null;
        if (cur.closest &amp;&amp; cur.closest('[data-r0y-no-label-edit]')) {
          cur = cur.parentElement;
          depth++;
          continue;
        }
        var okTag = tn === 'BUTTON' || tn === 'A' || tn === 'SPAN' || tn === 'P' || tn === 'H1' || tn === 'H2' || tn === 'H3' || tn === 'H4' || tn === 'H5' || tn === 'H6' || tn === 'DIV' || tn === 'LI' || tn === 'TD' || tn === 'TH' || tn === 'LABEL' || tn === 'B' || tn === 'STRONG' || tn === 'EM' || tn === 'I';
        var tx = (cur.textContent || '').trim();
        if (okTag &amp;&amp; tx.length &gt; 0 &amp;&amp; !isLikelyMetricOnly(cur)) {
          try {
            var r = cur.getBoundingClientRect();
            if (r.width &gt;= 2 &amp;&amp; r.height &gt;= 2) candidates.push({ el: cur, a: r.width * r.height });
          } catch (e0) {}
        }
      }
      cur = cur.parentElement;
      depth++;
    }
    if (!candidates.length) return null;
    candidates.sort(function(a, b) { return a.a - b.a; });
    var pick = candidates[0].el;
    if (pick === root) return null;
    return pick;
  }
  function finishCommit(commit) {
    if (!activeEl || finishing) return;
    finishing = true;
    var root = document.getElementById('root');
    var key = window.r0yPathKeyFromEl(activeEl, root);
    var el = activeEl;
    el.contentEditable = 'false';
    el.style.outline = '';
    el.style.outlineOffset = '';
    var txt = (el.textContent || '').trim();
    activeEl = null;
    finishing = false;
    if (commit &amp;&amp; key) parent.postMessage({ type: 'R0Y_LABEL_PATCH_COMMIT', pathKey: key, text: txt }, __r0y_allowed_origin || '*');
  }
  function onDblClick(e) {
    if (!labelEditOn) return;
    if (e.target &amp;&amp; e.target.closest &amp;&amp; e.target.closest('input,textarea,select')) return;
    var host = findHost(e.target);
    if (!host) return;
    e.preventDefault();
    e.stopPropagation();
    if (activeEl &amp;&amp; activeEl !== host) finishCommit(true);
    activeEl = host;
    origText = host.textContent || '';
    host.contentEditable = 'true';
    host.style.outline = '2px solid rgba(56,189,248,0.85)';
    host.style.outlineOffset = '2px';
    host.focus();
    try {
      var sel = window.getSelection &amp;&amp; window.getSelection();
      var rge = document.createRange();
      rge.selectNodeContents(host);
      sel.removeAllRanges();
      sel.addRange(rge);
    } catch (e1) {}
  }
  document.addEventListener('focusout', function(ev) {
    if (!labelEditOn || !activeEl) return;
    if (ev.target !== activeEl) return;
    setTimeout(function() {
      if (!activeEl) return;
      if (document.activeElement === activeEl) return;
      finishCommit(true);
    }, 0);
  }, true);
  document.addEventListener('keydown', function(e) {
    if (!activeEl) return;
    if (e.key === 'Escape') {
      activeEl.textContent = origText;
      finishCommit(false);
      e.preventDefault();
    }
  }, true);
  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'R0Y_LABEL_EDIT_MODE') return;
    labelEditOn = e.data.active === true;
    if (!labelEditOn &amp;&amp; activeEl) {
      activeEl.contentEditable = 'false';
      activeEl.style.outline = '';
      activeEl.style.outlineOffset = '';
      activeEl = null;
    }
    document.body.style.cursor = labelEditOn ? 'text' : '';
  });
  document.addEventListener('dblclick', onDblClick, true);
})();
(function() {
  var fillPaintOn = false;
  var fillPaintErase = false;
  var fillPaintColor = 'transparent';
  var paintCur =
    'url(&quot;data:image/svg+xml,' +
    encodeURIComponent(
      '&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;white&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;&gt;&lt;path d=&quot;m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z&quot;/&gt;&lt;path d=&quot;m5 2 5 5&quot;/&gt;&lt;path d=&quot;M2 13h15&quot;/&gt;&lt;path d=&quot;M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z&quot;/&gt;&lt;/svg&gt;',
    ) +
    '&quot;) 8 16, crosshair';
  var eraseCur =
    'url(&quot;data:image/svg+xml,' +
    encodeURIComponent(
      '&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;white&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;&gt;&lt;path d=&quot;M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21&quot;/&gt;&lt;path d=&quot;m5.082 11.09 8.828 8.828&quot;/&gt;&lt;/svg&gt;',
    ) +
    '&quot;) 10 18, crosshair';
  function findFillHost(target) {
    var root = document.getElementById('root');
    if (!root || !target) return null;
    var cur = target.nodeType === 1 ? target : target.parentElement;
    if (!cur || !root.contains(cur)) return null;
    var skipTag = { SCRIPT: 1, STYLE: 1, IFRAME: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1 };
    var rootR = root.getBoundingClientRect();
    var rootArea = Math.max(1, rootR.width * rootR.height);
    function collect(minW, minH, minA) {
      var out = [];
      var c = target.nodeType === 1 ? target : target.parentElement;
      if (!c || !root.contains(c)) return out;
      while (c &amp;&amp; c !== root) {
        if (!root.contains(c)) break;
        var tn = c.tagName;
        if (skipTag[tn]) {
          c = c.parentElement;
          continue;
        }
        if (c.closest &amp;&amp; c.closest('[data-r0y-no-fill-paint]')) {
          c = c.parentElement;
          continue;
        }
        if (tn === 'CANVAS') {
          c = c.parentElement;
          continue;
        }
        var svgRoot = c.closest &amp;&amp; c.closest('svg');
        if (svgRoot &amp;&amp; c !== svgRoot) {
          c = svgRoot.parentElement;
          continue;
        }
        if (tn === 'SVG') {
          c = c.parentElement;
          continue;
        }
        var ok =
          tn === 'DIV' ||
          tn === 'SECTION' ||
          tn === 'ARTICLE' ||
          tn === 'BUTTON' ||
          tn === 'NAV' ||
          tn === 'HEADER' ||
          tn === 'MAIN' ||
          tn === 'ASIDE' ||
          tn === 'LI' ||
          tn === 'UL' ||
          tn === 'OL' ||
          tn === 'TD' ||
          tn === 'TH';
        if (ok) {
          try {
            var r = c.getBoundingClientRect();
            var a = r.width * r.height;
            if (r.width &gt;= minW &amp;&amp; r.height &gt;= minH &amp;&amp; a &gt;= minA) out.push({ el: c, a: a });
          } catch (e0) {}
        }
        c = c.parentElement;
      }
      return out;
    }
    var minW = 56;
    var minH = 32;
    var minA = 2400;
    var candidates = collect(minW, minH, minA);
    if (!candidates.length) candidates = collect(40, 22, 1200);
    if (!candidates.length) return null;
    var clickStart = target.nodeType === 1 ? target : target.parentElement;
    var rk = window.r0yLayoutEligChildren(root);
    if (rk.length === 1 &amp;&amp; clickStart) {
      var shell = rk[0];
      try {
        var sr = shell.getBoundingClientRect();
        var shellBig = (sr.width * sr.height) / rootArea &gt; 0.82;
        if (shellBig &amp;&amp; clickStart !== shell &amp;&amp; shell.contains(clickStart)) {
          candidates = candidates.filter(function(c) { return c.el !== shell; });
        }
      } catch (e1) {}
    }
    if (!candidates.length) return null;
    candidates.sort(function(x, y) { return x.a - y.a; });
    var pick = 0;
    if (candidates.length &gt;= 2) {
      var ratio0 = candidates[0].a / rootArea;
      if (ratio0 &gt; 0.86) pick = 1;
    }
    return candidates[pick].el;
  }
  function resolveFillPaintTarget(host) {
    if (!host) return null;
    var cur = host;
    for (var depth = 0; depth &lt; 14; depth++) {
      var kids = window.r0yLayoutEligChildren(cur);
      if (kids.length !== 1) break;
      var k = kids[0];
      var tn = k.tagName;
      if (tn === 'SVG' || tn === 'CANVAS' || tn === 'SCRIPT' || tn === 'STYLE') break;
      try {
        var rC = cur.getBoundingClientRect();
        var rK = k.getBoundingClientRect();
        var aC = rC.width * rC.height;
        var aK = rK.width * rK.height;
        if (aC &lt; 400 || aK &lt; 400) break;
        if (aK &lt; aC * 0.62) break;
        cur = k;
      } catch (e2) { break; }
    }
    return cur;
  }
  function onPointerDown(e) {
    if (!fillPaintOn || e.button !== 0) return;
    if (e.target &amp;&amp; e.target.closest &amp;&amp; e.target.closest('input,textarea,select')) return;
    var t = e.target;
    var el = t &amp;&amp; t.nodeType === 3 ? t.parentElement : t;
    var hostRaw = findFillHost(el);
    if (!hostRaw) return;
    var host = resolveFillPaintTarget(hostRaw);
    if (!host) return;
    e.preventDefault();
    e.stopPropagation();
    var root = document.getElementById('root');
    var key = window.r0yPathKeyFromEl(host, root);
    if (!key) return;
    var col = fillPaintErase ? 'transparent' : (fillPaintColor || 'transparent');
    if (window.r0yApplyFillToNode) window.r0yApplyFillToNode(host, col);
    if (!__r0y_last_fill_patches || typeof __r0y_last_fill_patches !== 'object') __r0y_last_fill_patches = {};
    if (col === 'transparent' || !col) delete __r0y_last_fill_patches[key];
    else __r0y_last_fill_patches[key] = col;
    if (!Object.keys(__r0y_last_fill_patches).length) __r0y_last_fill_patches = null;
    parent.postMessage({ type: 'R0Y_FILL_PATCH_COMMIT', pathKey: key, color: col }, __r0y_allowed_origin || '*');
  }
  window.addEventListener('message', function(e) {
    if (!e.data || e.data.type !== 'R0Y_FILL_PAINT_MODE') return;
    fillPaintOn = e.data.active === true;
    fillPaintErase = e.data.mode === 'erase';
    fillPaintColor = typeof e.data.color === 'string' ? e.data.color : 'transparent';
    var html = document.documentElement;
    if (fillPaintOn) {
      html.style.setProperty('--r0y-fill-cursor', fillPaintErase ? eraseCur : paintCur);
      html.classList.add('r0y-fill-cursor-lock');
      document.body.style.cursor = '';
    } else {
      html.classList.remove('r0y-fill-cursor-lock');
      html.style.removeProperty('--r0y-fill-cursor');
      document.body.style.cursor = '';
    }
  });
  document.addEventListener('pointerdown', onPointerDown, true);
})();
function r0yEnsureWidgetErrorBoundary(src) {
  if (src.indexOf('R0yWidgetErrorBoundary') === -1) return src;
  var decl = /(?:^|[\n;{}])\s*(?:const|let|var|function|class)\s+R0yWidgetErrorBoundary\b/m;
  if (decl.test(src)) return src;
  return 'class R0yWidgetErrorBoundary extends React.Component {\n' +
    '  constructor(p){ super(p); this.state = { error: null }; }\n' +
    '  static getDerivedStateFromError(e){ return { error: e &amp;&amp; e.message ? e.message : String(e) }; }\n' +
    '  render(){\n' +
    '    if (this.state.error) {\n' +
    '      return React.createElement(\'div\', { style: { padding: 16, fontSize: 11, color: \'rgba(255,255,255,0.55)\' } }, \'Widget error: \', this.state.error);\n' +
    '    }\n' +
    '    return this.props.children;\n' +
    '  }\n' +
    '}\n\n' + src;
}
function r0yEnsurePrimitiveBindings(src) {
  var r0y = [&quot;R0yPageHeader&quot;,&quot;R0yOnceUiBackground&quot;,&quot;R0yVolSurface&quot;,&quot;R0yDcfModel&quot;,&quot;R0yBlackScholesModel&quot;,&quot;R0yPythonModel&quot;,&quot;R0yNewsList&quot;,&quot;R0yMonteCarloChart&quot;,&quot;R0yDistribution&quot;,&quot;R0yDonutChart&quot;,&quot;R0yHeatmap&quot;,&quot;R0yXyChart&quot;,&quot;R0yQuadrant&quot;,&quot;R0yCustomViz&quot;,&quot;R0yBreadcrumb&quot;,&quot;R0yGenericChart&quot;,&quot;R0yRadarChart&quot;,&quot;R0yKpiSparkline&quot;,&quot;R0ySimpleTable&quot;,&quot;R0yTimeRangePills&quot;,&quot;R0yInput&quot;,&quot;R0ySlider&quot;,&quot;R0yTickerInput&quot;,&quot;R0yDivider&quot;,&quot;R0yFooter&quot;,&quot;R0ySearch&quot;,&quot;R0yPanel&quot;,&quot;R0yCallout&quot;,&quot;R0yTag&quot;,&quot;R0yLivePill&quot;,&quot;R0yProgress&quot;,&quot;R0yTable&quot;,&quot;R0yKpi&quot;,&quot;R0yChart&quot;,&quot;R0yEconKpi&quot;,&quot;R0yEconChart&quot;,&quot;R0yEconAreaChart&quot;,&quot;R0yFmpKpi&quot;,&quot;R0yGauge&quot;,&quot;R0yGeoMap&quot;,&quot;R0yText&quot;,&quot;R0yAreaChart&quot;,&quot;R0yBarChart&quot;,&quot;ActivityPulseWidget_DualSeriesChart&quot;,&quot;AfricaChoroplethMap&quot;,&quot;AreaChartWithPill&quot;,&quot;AsiaChoroplethMap&quot;,&quot;BandedAreaChart&quot;,&quot;BidirectionalBarcodeChart&quot;,&quot;BtcExchangeFlowPulseWidget_DownArrowGlyph&quot;,&quot;BtcExchangeFlowPulseWidget_MvrvArrowGlyph&quot;,&quot;BtcExchangeFlowPulseWidget_RefreshGlyph&quot;,&quot;BubbleFlagScatterChart&quot;,&quot;BubbleGridTimeline&quot;,&quot;CanadaProvincesMap&quot;,&quot;CarbonIntensitySectorWidget_SectorBars&quot;,&quot;ColorGradientHeatmapTable&quot;,&quot;ComboBarLineChart&quot;,&quot;CompactFrequencyDistributionChart&quot;,&quot;ConeFanChart&quot;,&quot;ConsumerSentimentWidget_HistoryChart&quot;,&quot;ConsumerSentimentWidget_SentimentGauge&quot;,&quot;CpiDecompositionWidget_StackedPanel&quot;,&quot;CpiDecompositionWidget_WaterfallPanel&quot;,&quot;CrossAssetRegimeWidget_LegendPanel&quot;,&quot;DistributionHistogram&quot;,&quot;DivergingBarChart&quot;,&quot;DivergingHeatmapTable&quot;,&quot;DonutChart&quot;,&quot;DotPlotChart&quot;,&quot;DoubleAreaChart&quot;,&quot;DoubleComparativeBarList&quot;,&quot;DualAxisLineChart&quot;,&quot;EfficientFrontierWidget_FrontierChart&quot;,&quot;EuropeChoroplethMap&quot;,&quot;FedDotPlotWidget_DotPlotChart&quot;,&quot;FomcMeetingProbabilitiesWidget_PolicyPathChart&quot;,&quot;GdpNowcastWidget_GdpAreaChart&quot;,&quot;GdpNowcastWidget_GrowthSparkPanel&quot;,&quot;GlobalConflictPulseMapWidget_Legend&quot;,&quot;GlobalRiskMapWidget_LegendBar&quot;,&quot;GlobalRiskSentimentMapWidget_SentimentLegend&quot;,&quot;GradientSmileCurve&quot;,&quot;HeatmapMatrixTable&quot;,&quot;HistoricalForecastLineChart&quot;,&quot;HorizontalBarChart&quot;,&quot;HorizontalBarChartWithReferenceLine&quot;,&quot;HorizontalWaterfallChart&quot;,&quot;HousingPressureMapWidget_GradientLegend&quot;,&quot;InflationHeatmapWidget_ColorLegend&quot;,&quot;InflationNowcastWidget_AccuracyPanel&quot;,&quot;InflationNowcastWidget_ComponentNowcastPanel&quot;,&quot;InflationNowcastWidget_DensityPanel&quot;,&quot;Interactive3DSurface&quot;,&quot;JoltsLaborWidget_DualLineChart&quot;,&quot;LabeledScatterPlot&quot;,&quot;LaborPulseWidget_DualSparkChart&quot;,&quot;LboTrancheWidget_TornadoPanel&quot;,&quot;LineBarOverlayWithPercentileBands&quot;,&quot;LineChartWithShadedBands&quot;,&quot;LowerCorrelationMatrix&quot;,&quot;MirroredAreaLineChart&quot;,&quot;MultiLineChart&quot;,&quot;NaturalResourceReserveMap&quot;,&quot;NeedleRingGauge&quot;,&quot;OceanicTradeMap&quot;,&quot;OddPairCorrelationWidget_LegendBar&quot;,&quot;OpacityHeatmapGrid&quot;,&quot;PairedBarChart&quot;,&quot;PathsFanChart&quot;,&quot;PremiumSegmentedGauge&quot;,&quot;PriceRangeBar&quot;,&quot;PriceVolumeProfile&quot;,&quot;ProbabilityDistributionChart&quot;,&quot;QuadrantScatterPlot&quot;,&quot;RadarChart&quot;,&quot;RangeIndicator&quot;,&quot;RealWageHeatmapWidget_LegendBar&quot;,&quot;ReferenceLineChart&quot;,&quot;RegimeBandLineChart&quot;,&quot;RegimedLineChart&quot;,&quot;RegimeTimelineGrid&quot;,&quot;RegressionScatterPlot&quot;,&quot;RelativeRotationGraph&quot;,&quot;SankeyChart&quot;,&quot;SectorCorrelationRegimeWidget_ColorLegend&quot;,&quot;SectorCorrelationRegimeWidget_DownloadGlyph&quot;,&quot;SectorCorrelationRegimeWidget_FullscreenGlyph&quot;,&quot;SectorCorrelationWidget_ColorLegend&quot;,&quot;SectorTreemapWidget_ColorLegend&quot;,&quot;SegmentedArcGauge&quot;,&quot;SensitivityTable&quot;,&quot;SentimentPulseWidget_TopicDonut&quot;,&quot;ShadedAreaDifferenceChart&quot;,&quot;Sparkline&quot;,&quot;SpeedometerDial&quot;,&quot;StackedAreaChart&quot;,&quot;StackedBarChart&quot;,&quot;StateGdpMapWidget_LegendBar&quot;,&quot;StateTransitionMatrix&quot;,&quot;StemLineChart&quot;,&quot;StepSparklineChart&quot;,&quot;TreasuryYieldCurveWidget_CurveChart&quot;,&quot;UnderwaterChart&quot;,&quot;UsChoroplethMap&quot;,&quot;UsMacroMapWidget_LegendBar&quot;,&quot;ValueHeatstripList&quot;,&quot;ValueSliderGauge&quot;,&quot;VerticalBarChart&quot;,&quot;VerticalStackedBarChart&quot;,&quot;VolatilityRiskPremiumWidget_VrpArrowGlyph&quot;,&quot;VolConeWidget_RegimeHistory&quot;,&quot;VolConeWidget_VrpDecomposition&quot;,&quot;VolSurface3DWidget_ColorLegend&quot;,&quot;WageInflationSpreadWidget_SpreadChart&quot;,&quot;WorldChoroplethMap&quot;,&quot;ZScoreChart&quot;];
  var head = &quot;&quot;;
  for (var i = 0; i &lt; r0y.length; i++) {
    var name = r0y[i];
    if (src.indexOf(name) === -1) continue;
    var decl = new RegExp(&quot;(?:^|[\\n;{}])\\s*(?:const|let|var|function|class)\\s+&quot; + name + &quot;\\b&quot;, &quot;m&quot;);
    if (decl.test(src)) continue;
    head += &quot;var &quot; + name + &quot; = (typeof window !== 'undefined' &amp;&amp; window.&quot; + name + &quot;) || function __&quot; + name + &quot;Stub(p){ return React.createElement('div', {style:{padding:12,fontSize:11,color:'rgba(255,255,255,0.45)'}}, (p &amp;&amp; (p.title || p.seriesName || p.label)) || '&quot; + name + &quot;'); };\n&quot;;
  }
  return head ? head + src : src;
}
function r0yRenderCompiled(code, props) {
  if (window.R0yAssumptions &amp;&amp; window.R0yAssumptions.reset) window.R0yAssumptions.reset();
  var Recharts = window.Recharts || {};
  if (Recharts.default) Recharts = Recharts.default;
  var exports = {};
  var module = { exports: exports };
  var L = Recharts.LineChart, B = Recharts.BarChart, RC = Recharts.ResponsiveContainer;
  var XA = Recharts.XAxis, YA = Recharts.YAxis, CG = Recharts.CartesianGrid;
  var T = Recharts.Tooltip, Leg = Recharts.Legend, Lin = Recharts.Line;
  var Ar = Recharts.Area, Bar = Recharts.Bar, P = Recharts.Pie, C = Recharts.Cell;
  var CC = Recharts.ComposedChart, AC = Recharts.AreaChart, PC = Recharts.PieChart;
  var SC = Recharts.ScatterChart, RC2 = Recharts.RadarChart, RBar = Recharts.RadialBarChart;
  var RL = Recharts.ReferenceLine, RA = Recharts.ReferenceArea, RD = Recharts.ReferenceDot;
  var Br = Recharts.Brush, Lab = Recharts.Label, LabL = Recharts.LabelList;
  var useState = React.useState, useEffect = React.useEffect, useMemo = React.useMemo;
  var useCallback = React.useCallback, useRef = React.useRef;
  var motion = window.motion, AnimatePresence = window.AnimatePresence, lucide = window.lucide;
  var gsap = window.gsap || {}, d3 = window.d3 || {};
  var inject = &quot;var useState=arguments[3],useEffect=arguments[4],useMemo=arguments[5],useCallback=arguments[6],useRef=arguments[7],LineChart=arguments[8],BarChart=arguments[9],ResponsiveContainer=arguments[10],XAxis=arguments[11],YAxis=arguments[12],CartesianGrid=arguments[13],Tooltip=arguments[14],Legend=arguments[15],Line=arguments[16],Area=arguments[17],Bar=arguments[18],Pie=arguments[19],Cell=arguments[20],ComposedChart=arguments[21],AreaChart=arguments[22],PieChart=arguments[23],ScatterChart=arguments[24],RadarChart=arguments[25],RadialBarChart=arguments[26],ReferenceLine=arguments[27],ReferenceArea=arguments[28],ReferenceDot=arguments[29],Brush=arguments[30],Label=arguments[31],LabelList=arguments[32],motion=arguments[33],AnimatePresence=arguments[34],lucide=arguments[35],gsap=arguments[36],d3=arguments[37];&quot;;
  var fn = new Function(&quot;React&quot;,&quot;module&quot;,&quot;exports&quot;,&quot;useState&quot;,&quot;useEffect&quot;,&quot;useMemo&quot;,&quot;useCallback&quot;,&quot;useRef&quot;,&quot;L&quot;,&quot;B&quot;,&quot;RC&quot;,&quot;XA&quot;,&quot;YA&quot;,&quot;CG&quot;,&quot;T&quot;,&quot;Leg&quot;,&quot;Lin&quot;,&quot;Ar&quot;,&quot;Bar&quot;,&quot;P&quot;,&quot;C&quot;,&quot;CC&quot;,&quot;AC&quot;,&quot;PC&quot;,&quot;SC&quot;,&quot;RC2&quot;,&quot;RBar&quot;,&quot;RL&quot;,&quot;RA&quot;,&quot;RD&quot;,&quot;Br&quot;,&quot;Lab&quot;,&quot;LabL&quot;,&quot;motion&quot;,&quot;AnimatePresence&quot;,&quot;lucide&quot;,&quot;gsap&quot;,&quot;d3&quot;, inject + code);
  fn(React,module,exports,useState,useEffect,useMemo,useCallback,useRef,L,B,RC,XA,YA,CG,T,Leg,Lin,Ar,Bar,P,C,CC,AC,PC,SC,RC2,RBar,RL,RA,RD,Br,Lab,LabL,motion,AnimatePresence,lucide,gsap,d3);
  var Component = (module.exports &amp;&amp; module.exports.default) || (exports &amp;&amp; exports.default) || window.__R0Y_DEFAULT_EXPORT__ || window.__R0Y_COMPONENT__ || null;
  if (!Component || typeof Component !== 'function') throw new Error('Could not find React component in compiled widget.');
  var mountEl = document.getElementById('root');
  if (!mountEl) throw new Error('Missing #root mount element');
  if (!window.__R0Y_ROOT__) {
    window.__R0Y_ROOT__ = ReactDOM.createRoot(mountEl);
  }
  if (window.__R0Y_RESIZE_OBSERVER__) {
    try { window.__R0Y_RESIZE_OBSERVER__.disconnect(); } catch (x) {}
    window.__R0Y_RESIZE_OBSERVER__ = null;
  }
  var rawProps = props || {};
  var __r0yNested = rawProps.__r0yLayoutNestedOrders;
  var __r0yLayoutOrder = rawProps.__r0yLayoutSectionOrder;
  var __r0yLabelPatchesLp = rawProps.__r0yLabelPatches;
  var __r0yFillPatchesLp = rawProps.__r0yFillPatches;
  var compProps = {};
  for (var pk in rawProps) {
    if (Object.prototype.hasOwnProperty.call(rawProps, pk) &amp;&amp; pk !== '__r0yLayoutSectionOrder' &amp;&amp; pk !== '__r0yLayoutNestedOrders' &amp;&amp; pk !== '__r0yLabelPatches' &amp;&amp; pk !== '__r0yFillPatches') compProps[pk] = rawProps[pk];
  }
  window.__R0Y_ROOT__.render(React.createElement(ErrorBoundary, null, React.createElement(Component, compProps)));
  requestAnimationFrame(function() {
    try {
      var __r0yRoot = document.getElementById('root');
      if (__r0yRoot &amp;&amp; window.r0yTagAllLayoutSections) window.r0yTagAllLayoutSections(__r0yRoot);
      if (__r0yNested &amp;&amp; __r0yNested.length &amp;&amp; window.r0yApplyNestedLayoutOrders) window.r0yApplyNestedLayoutOrders(__r0yRoot, __r0yNested);
      else if (__r0yLayoutOrder &amp;&amp; __r0yLayoutOrder.length &amp;&amp; window.r0yApplyLayoutSectionOrder) window.r0yApplyLayoutSectionOrder(__r0yLayoutOrder);
      if (__r0yLabelPatchesLp &amp;&amp; typeof __r0yLabelPatchesLp === 'object' &amp;&amp; window.r0yApplyLabelPatches) {
        window.r0yApplyLabelPatches(__r0yRoot, __r0yLabelPatchesLp);
      }
      __r0y_last_label_patches = (__r0yLabelPatchesLp &amp;&amp; typeof __r0yLabelPatchesLp === 'object') ? __r0yLabelPatchesLp : null;
      if (__r0yFillPatchesLp &amp;&amp; typeof __r0yFillPatchesLp === 'object' &amp;&amp; window.r0yApplyFillPatches) {
        window.r0yApplyFillPatches(__r0yRoot, __r0yFillPatchesLp);
      }
      __r0y_last_fill_patches =
        __r0yFillPatchesLp &amp;&amp; typeof __r0yFillPatchesLp === 'object' &amp;&amp; Object.keys(__r0yFillPatchesLp).length
          ? __r0yFillPatchesLp
          : null;
    } catch (__r0yLayErr) {}
    if (__r0y_last_cosmetic_css &amp;&amp; r0yApplyCosmeticCss(__r0y_last_cosmetic_css)) {
      setTimeout(function() {
        try {
          parent.postMessage({ type: 'R0Y_COSMETIC_STYLE_APPLIED' }, __r0y_allowed_origin || '*');
        } catch (cosAckErr) {}
      }, 0);
    }
    if (window.r0yEnsurePatchReapplyObserver) window.r0yEnsurePatchReapplyObserver();
    reportSize();
    setTimeout(reportSize, 120);
    setTimeout(reportSize, 450);
    setTimeout(reportSize, 1000);
  });
  window.__R0Y_RESIZE_OBSERVER__ = new ResizeObserver(reportSize);
  window.__R0Y_RESIZE_OBSERVER__.observe(mountEl);
}
window.__r0yLibLoadTried__ = window.__r0yLibLoadTried__ || {};
window.addEventListener('message', function r0yOnMessage(e) {
  if (e.data &amp;&amp; e.data.type === 'R0Y_RENDER') {
    if (__r0y_allowed_origin &amp;&amp; e.origin !== __r0y_allowed_origin) return;
    // Phase 6-lite backstop: load any chart lib this code needs that the srcDoc pruned, then
    // re-enter this handler. One attempt per URL (window.__r0yLibLoadTried__); a repeat miss
    // falls through to the normal try/catch, which surfaces a graceful R0Y_RENDER_ERROR.
    var __missing = r0yMissingChartLibs(String(e.data.code || ''));
    var __untried = [];
    for (var __mi = 0; __mi &lt; __missing.length; __mi++) {
      if (!window.__r0yLibLoadTried__[__missing[__mi]]) __untried.push(__missing[__mi]);
    }
    if (__untried.length) {
      for (var __ui = 0; __ui &lt; __untried.length; __ui++) window.__r0yLibLoadTried__[__untried[__ui]] = true;
      r0yLoadLibScripts(__untried).then(function () {
        try { r0yOnMessage({ data: e.data, origin: e.origin }); } catch (eR2) {}
      }).catch(function (err) {
        try { parent.postMessage({ type: 'R0Y_RENDER_ERROR', error: String(err &amp;&amp; (err.message || err) || 'Unknown error') }, __r0y_allowed_origin || '*'); } catch (eR3) {}
      });
      return;
    }
    try {
      // New code is about to mount — re-measure and re-report content size for it.
      window.__R0Y_SIZE_SENT__ = false;
      window.__R0Y_PENDING_SIZE__ = null;
      if (e.data.precompiled) {
        r0yRenderCompiled(String(e.data.code || ''), e.data.props || {});
        return;
      }
      if (window.R0yAssumptions &amp;&amp; window.R0yAssumptions.reset) window.R0yAssumptions.reset();
      let code = fixMapCallbackSyntax(fixMalformedSvgPaths(String(e.data.code || '')));
      let componentName = null;
      let match = code.match(/export\s+default\s+function\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*[\(\{]/);
      if (match) componentName = match[1];
      if (!componentName) {
        match = code.match(/export\s+default\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*;?\s*$/m);
        if (match) componentName = match[1];
      }
      if (!componentName) {
        match = code.match(/function\s+([A-Z][A-Za-z0-9_$]*)\s*\(/);
        if (match) componentName = match[1];
      }
      if (!componentName) {
        match = code.match(/const\s+([A-Z][A-Za-z0-9_$]*)\s*=/);
        if (match) componentName = match[1];
      }
      code = code.replace(/^\s*import\s+[^;]+;?\s*$/gm, '');
      code = code.replace(/\bimport\s+[\s\S]*?from\s*['&quot;][^'&quot;]*['&quot;]\s*;?/g, '');
      code = code.replace(/export\s+default\s+function\s+([A-Za-z_$][A-Za-z0-9_$]*)/g, 'function $1');
      code = code.replace(/export\s+default\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*;?\s*$/gm, '');
      code = code.replace(/^\s*export\s+\{[^}]*\}\s*;?\s*$/gm, '');
      code = code.replace(/^\s*export\s+(const|let|var|class)\s+/gm, '$1 ');
      var hooks = ['useState', 'useEffect', 'useMemo', 'useRef', 'useCallback', 'useReducer', 'useContext'];
      hooks.forEach(function(hook) {
        var r = new RegExp('(?&lt;!window\.React\.)(?&lt;!React\.)\\b' + hook + '\\s*\\(', 'g');
        code = code.replace(r, 'React.' + hook + '(');
      });
      if (componentName) {
        code = code + '\n\nwindow.__R0Y_COMPONENT__ = ' + componentName + ';';
      }
      code = r0yEnsureWidgetErrorBoundary(code);
      code = r0yEnsurePrimitiveBindings(code);
      var transformed = Babel.transform(code, { presets: ['react', 'typescript'], filename: 'widget.tsx' }).code;
      var fn = new Function(transformed);
      fn();
      var Component = window.__R0Y_COMPONENT__;
      if (!Component &amp;&amp; typeof window.__R0Y_DEFAULT_EXPORT__ === 'function') {
        Component = window.__R0Y_DEFAULT_EXPORT__;
      }
      if (!Component) throw new Error('Could not find React component. Detected name: &quot;' + (componentName || 'none') + '&quot;.');
      if (typeof Component !== 'function') throw new Error('Component is not a function: ' + typeof Component);
      var mountEl = document.getElementById('root');
      if (!mountEl) throw new Error('Missing #root mount element');
      if (!window.__R0Y_ROOT__) {
        window.__R0Y_ROOT__ = ReactDOM.createRoot(mountEl);
      }
      if (window.__R0Y_RESIZE_OBSERVER__) {
        try { window.__R0Y_RESIZE_OBSERVER__.disconnect(); } catch (x) {}
        window.__R0Y_RESIZE_OBSERVER__ = null;
      }
      var rawProps = e.data.props || {};
      var __r0yNested = rawProps.__r0yLayoutNestedOrders;
      var __r0yLayoutOrder = rawProps.__r0yLayoutSectionOrder;
      var __r0yLabelPatchesLp = rawProps.__r0yLabelPatches;
      var __r0yFillPatchesLp = rawProps.__r0yFillPatches;
      var compProps = {};
      for (var pk in rawProps) {
        if (Object.prototype.hasOwnProperty.call(rawProps, pk) &amp;&amp; pk !== '__r0yLayoutSectionOrder' &amp;&amp; pk !== '__r0yLayoutNestedOrders' &amp;&amp; pk !== '__r0yLabelPatches' &amp;&amp; pk !== '__r0yFillPatches') compProps[pk] = rawProps[pk];
      }
      window.__R0Y_ROOT__.render(React.createElement(ErrorBoundary, null, React.createElement(Component, compProps)));
      requestAnimationFrame(function() {
        try {
          var __r0yRoot = document.getElementById('root');
          if (__r0yRoot &amp;&amp; window.r0yTagAllLayoutSections) window.r0yTagAllLayoutSections(__r0yRoot);
          if (__r0yNested &amp;&amp; __r0yNested.length &amp;&amp; window.r0yApplyNestedLayoutOrders) window.r0yApplyNestedLayoutOrders(__r0yRoot, __r0yNested);
          else if (__r0yLayoutOrder &amp;&amp; __r0yLayoutOrder.length &amp;&amp; window.r0yApplyLayoutSectionOrder) window.r0yApplyLayoutSectionOrder(__r0yLayoutOrder);
          if (__r0yLabelPatchesLp &amp;&amp; typeof __r0yLabelPatchesLp === 'object' &amp;&amp; window.r0yApplyLabelPatches) {
            window.r0yApplyLabelPatches(__r0yRoot, __r0yLabelPatchesLp);
          }
          __r0y_last_label_patches = (__r0yLabelPatchesLp &amp;&amp; typeof __r0yLabelPatchesLp === 'object') ? __r0yLabelPatchesLp : null;
          if (__r0yFillPatchesLp &amp;&amp; typeof __r0yFillPatchesLp === 'object' &amp;&amp; window.r0yApplyFillPatches) {
            window.r0yApplyFillPatches(__r0yRoot, __r0yFillPatchesLp);
          }
          __r0y_last_fill_patches =
            __r0yFillPatchesLp &amp;&amp; typeof __r0yFillPatchesLp === 'object' &amp;&amp; Object.keys(__r0yFillPatchesLp).length
              ? __r0yFillPatchesLp
              : null;
        } catch (__r0yLayErr) {}
        if (__r0y_last_cosmetic_css &amp;&amp; r0yApplyCosmeticCss(__r0y_last_cosmetic_css)) {
          setTimeout(function() {
            try {
              parent.postMessage({ type: 'R0Y_COSMETIC_STYLE_APPLIED' }, __r0y_allowed_origin || '*');
            } catch (cosAckErr) {}
          }, 0);
        }
        if (window.r0yEnsurePatchReapplyObserver) window.r0yEnsurePatchReapplyObserver();
        reportSize();
        setTimeout(reportSize, 120);
        setTimeout(reportSize, 450);
        setTimeout(reportSize, 1000);
      });
      window.__R0Y_RESIZE_OBSERVER__ = new ResizeObserver(reportSize);
      window.__R0Y_RESIZE_OBSERVER__.observe(mountEl);
    } catch (err) {
      parent.postMessage({ type: 'R0Y_RENDER_ERROR', error: String(err &amp;&amp; (err.message || err) || 'Unknown error') }, __r0y_allowed_origin || '*');
    }
  }
});
var rootEl = document.getElementById('root');
if (rootEl &amp;&amp; !window.__R0Y_ROOT__) {
  window.__R0Y_ROOT__ = ReactDOM.createRoot(rootEl);
  window.__R0Y_ROOT__.render(React.createElement(ErrorBoundary, null, React.createElement(function Building() {
    return React.createElement('div', {
      style: {
        minHeight: '100%', background: '#050505', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'system-ui,sans-serif', color: '#e5e5e5'
      }
    }, React.createElement('div', { style: { width: '24px', height: '24px', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: 'rgba(255,255,255,0.6)', borderRadius: '50%' } }), React.createElement('span', { style: { fontSize: '15px', fontWeight: '500', marginTop: '12px' } }, 'Building your widget'));
  })));
}
function getLinkUrl(t) {
  if (!t) return null;
  var a = t.closest ? t.closest('a') : null;
  if (a &amp;&amp; a.href &amp;&amp; a.href !== '#' &amp;&amp; !a.href.startsWith('javascript:')) return a.href;
  var el = t;
  while (el &amp;&amp; el !== document.body) {
    var u = el.getAttribute &amp;&amp; (el.getAttribute('data-href') || el.getAttribute('data-url') || el.getAttribute('data-link') || el.getAttribute('href'));
    if (u &amp;&amp; u.trim() &amp;&amp; u !== '#' &amp;&amp; !u.startsWith('javascript:')) return u.trim();
    el = el.parentElement;
  }
  return null;
}
var __r0y_link_just_opened = false;
function openLink(url, e) {
  if (!url) return;
  if (e) { e.preventDefault(); e.stopPropagation(); }
  __r0y_link_just_opened = true;
  setTimeout(function() { __r0y_link_just_opened = false; }, 200);
  var opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) parent.postMessage({ type: 'R0Y_OPEN_LINK', url: url }, __r0y_allowed_origin || '*');
}
document.documentElement.addEventListener('mousedown', function(e) {
  if (e.button !== 0) return;
  var url = getLinkUrl(e.target);
  if (url) openLink(url, e);
}, true);
document.documentElement.addEventListener('click', function(e) {
  if (__r0y_link_just_opened) { e.preventDefault(); e.stopPropagation(); return; }
  var url = getLinkUrl(e.target);
  if (url) openLink(url, e);
}, true);
window.__r0y_allow_widget_scroll = false;
window.__r0y_scroll_surface = null;
function r0yElementScrollableY(el) {
  if (!el || el.nodeType !== 1) return false;
  try {
    var max = el.scrollHeight - el.clientHeight;
    if (max &lt;= 1) return false;
    var st = window.getComputedStyle(el);
    var oy = st.overflowY;
    var ov = st.overflow;
    if (oy === 'visible' &amp;&amp; (ov === 'auto' || ov === 'scroll' || ov === 'overlay')) oy = ov;
    return oy === 'auto' || oy === 'scroll' || oy === 'overlay';
  } catch (err) { return false; }
}
function r0yResolveScrollSurface(clientX, clientY) {
  if (typeof clientX === 'number' &amp;&amp; typeof clientY === 'number') {
    var stack = document.elementsFromPoint(clientX, clientY) || [];
    for (var i = 0; i &lt; stack.length; i++) {
      if (r0yElementScrollableY(stack[i])) return stack[i];
    }
  }
  if (window.__r0y_scroll_surface &amp;&amp; window.__r0y_scroll_surface.isConnected) {
    return window.__r0y_scroll_surface;
  }
  var root = document.getElementById('root');
  if (!root) return document.scrollingElement || document.documentElement;
  var best = null;
  var bestMax = 0;
  var bestHidden = null;
  var bestHiddenExcess = 0;
  var nodes = root.querySelectorAll('[data-scroll-container], *');
  for (var j = 0; j &lt; nodes.length; j++) {
    var n = nodes[j];
    var excess = n.scrollHeight - n.clientHeight;
    if (r0yElementScrollableY(n) &amp;&amp; excess &gt; bestMax) { bestMax = excess; best = n; }
    if (excess &gt; bestHiddenExcess) { bestHiddenExcess = excess; bestHidden = n; }
  }
  if (best) {
    window.__r0y_scroll_surface = best;
    return best;
  }
  var target = bestHidden &amp;&amp; bestHiddenExcess &gt; 1 ? bestHidden : (root.firstElementChild || root);
  target.style.overflowY = 'auto';
  target.style.overflowX = 'hidden';
  target.style.height = '100%';
  target.style.maxHeight = '100%';
  target.style.overscrollBehavior = 'contain';
  target.setAttribute('data-r0y-scroll-surface', '1');
  window.__r0y_scroll_surface = target;
  return target;
}
function r0ySetWidgetScrollEnabled(allow) {
  window.__r0y_allow_widget_scroll = allow === true;
  try {
    var root = document.getElementById('root');
    var html = document.documentElement;
    var body = document.body;
    if (!allow) {
      html.style.overflowY = '';
      body.style.overflowY = '';
      body.style.height = '';
      if (root) {
        root.style.overflowY = '';
        root.style.height = '';
        root.style.maxHeight = '';
      }
      var forced = document.querySelector('[data-r0y-scroll-surface]');
      if (forced) {
        forced.style.overflowY = '';
        forced.style.overflowX = '';
        forced.style.height = '';
        forced.style.maxHeight = '';
        forced.style.overscrollBehavior = '';
        forced.removeAttribute('data-r0y-scroll-surface');
      }
      window.__r0y_scroll_surface = null;
      return;
    }
    html.style.overflowY = 'hidden';
    body.style.overflowY = 'hidden';
    body.style.height = '100%';
    if (root) {
      root.style.overflowY = 'auto';
      root.style.height = '100%';
      root.style.maxHeight = '100%';
      root.style.overscrollBehavior = 'contain';
      root.style.webkitOverflowScrolling = 'touch';
    }
    window.__r0y_scroll_surface = r0yResolveScrollSurface(null, null);
  } catch (err) {}
}
function applyWidgetVerticalScroll(deltaY, clientX, clientY) {
  if (!deltaY) return;
  var scrollEl = r0yResolveScrollSurface(clientX, clientY);
  if (!scrollEl) return;
  var max = Math.max(0, scrollEl.scrollHeight - scrollEl.clientHeight);
  scrollEl.scrollTop = Math.max(0, Math.min(max, scrollEl.scrollTop + deltaY));
}
function r0yElementScrollableX(el) {
  if (!el || el.nodeType !== 1) return false;
  try {
    var max = el.scrollWidth - el.clientWidth;
    if (max &lt;= 1) return false;
    var st = window.getComputedStyle(el);
    var ox = st.overflowX;
    var ov = st.overflow;
    if (ox === 'visible' &amp;&amp; (ov === 'auto' || ov === 'scroll' || ov === 'overlay')) ox = ov;
    return ox === 'auto' || ox === 'scroll' || ox === 'overlay';
  } catch (err) { return false; }
}
function r0yResolveHorizontalScrollSurface(clientX, clientY) {
  if (typeof clientX === 'number' &amp;&amp; typeof clientY === 'number') {
    var stack = document.elementsFromPoint(clientX, clientY) || [];
    for (var i = 0; i &lt; stack.length; i++) {
      if (r0yElementScrollableX(stack[i])) return stack[i];
    }
  }
  return null;
}
function applyWidgetHorizontalScroll(deltaX, clientX, clientY) {
  if (!deltaX) return;
  var scrollEl = r0yResolveHorizontalScrollSurface(clientX, clientY);
  if (!scrollEl) return;
  var max = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
  scrollEl.scrollLeft = Math.max(0, Math.min(max, scrollEl.scrollLeft + deltaX));
}
window.addEventListener('message', function(e) {
  if (e.data &amp;&amp; e.data.type === 'R0Y_SET_WIDGET_SCROLL') {
    r0ySetWidgetScrollEnabled(e.data.allow === true);
  }
  if (e.data &amp;&amp; e.data.type === 'R0Y_WIDGET_WHEEL_FORWARD') {
    applyWidgetVerticalScroll(e.data.deltaY ?? 0, e.data.clientX, e.data.clientY);
    applyWidgetHorizontalScroll(e.data.deltaX ?? 0, e.data.clientX, e.data.clientY);
  }
});
document.documentElement.addEventListener('mousedown', function(e) {
  var t = e.target &amp;&amp; e.target.closest ? e.target.closest('button, a, input, select, textarea, [role=&quot;button&quot;]') : null;
  if (t) return;
  r0ySetWidgetScrollEnabled(true);
  parent.postMessage({ type: 'R0Y_WIDGET_CLICKED' }, __r0y_allowed_origin || '*');
}, true);
document.documentElement.addEventListener('wheel', function(e) {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    e.stopPropagation();
    parent.postMessage({
      type: 'R0Y_WIDGET_WHEEL',
      deltaX: 0,
      deltaY: e.deltaY,
      ctrlKey: true,
      clientX: e.clientX,
      clientY: e.clientY
    }, __r0y_allowed_origin || '*');
    return;
  }
  if (window.__r0y_allow_widget_scroll) {
    var absX = Math.abs(e.deltaX);
    var absY = Math.abs(e.deltaY);
    if (absY &gt;= absX &amp;&amp; absY &gt; 0) {
      applyWidgetVerticalScroll(e.deltaY, e.clientX, e.clientY);
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (absX &gt; absY &amp;&amp; absX &gt; 0) {
      applyWidgetHorizontalScroll(e.deltaX, e.clientX, e.clientY);
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  parent.postMessage({
    type: 'R0Y_WIDGET_WHEEL',
    deltaX: e.deltaX,
    deltaY: e.deltaY,
    ctrlKey: false,
    clientX: e.clientX,
    clientY: e.clientY
  }, __r0y_allowed_origin || '*');
}, { passive: false, capture: true });

// Forward pointer movement to the parent so collaborative cursors keep updating
// even when the pointer is inside this sandboxed iframe (mouse events don't bubble to parent).
(function() {
  var raf = 0;
  var lastX = null;
  var lastY = null;
  function flush() {
    raf = 0;
    if (lastX == null || lastY == null) return;
    try {
      parent.postMessage({ type: 'R0Y_IFRAME_POINTER', clientX: lastX, clientY: lastY }, __r0y_allowed_origin || '*');
    } catch (e) {}
  }
  function onMove(e) {
    try {
      var fe = window.frameElement;
      if (!fe || !fe.getBoundingClientRect) return;
      var r = fe.getBoundingClientRect();
      var localX = (e &amp;&amp; e.clientX != null ? e.clientX : 0);
      var localY = (e &amp;&amp; e.clientY != null ? e.clientY : 0);
      var cw = fe.clientWidth || 0;
      var ch = fe.clientHeight || 0;
      var sx = cw &gt; 0 ? (r.width / cw) : 1;
      var sy = ch &gt; 0 ? (r.height / ch) : 1;
      var cx = r.left + (localX * sx);
      var cy = r.top + (localY * sy);
      if (!isFinite(cx) || !isFinite(cy)) return;
      lastX = cx;
      lastY = cy;
      if (!raf) raf = requestAnimationFrame(flush);
    } catch (err) {}
  }
  window.addEventListener('pointermove', onMove, { capture: true, passive: true });
  window.addEventListener('mousemove', onMove, { capture: true, passive: true });
})();
parent.postMessage({ type: 'R0Y_SANDBOX_READY' }, __r0y_allowed_origin || '*');
        &lt;/script&gt;
      &lt;/body&gt;
    &lt;/html&gt;
  " class="w-full border-0 flex-1" style="background: transparent; height: 1021px; min-height: 200px; touch-action: manipulation; border: 0px; opacity: 1; pointer-events: auto; width: 100%; display: block;"></iframe>

