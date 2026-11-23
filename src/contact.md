---
title: Contact
layout: page.njk
section: personal
permalink: /contact/
---

For any reason you may wish to get in touch with me, write to <span class="mail" data-u="olleh" data-d="ku.oc.ynomlas">hello (at) salmony (dot) co (dot) uk</span>.

For professional enquiries please see [Payments Innovation Consulting](https://payments-innovation.com/contact/).

<script>
/* The address is put together in the browser, so that address-collecting robots reading the page source do not find it. */
(function () {
  var e = document.querySelector(".mail"); if (!e) return;
  var r = function (t) { return t.split("").reverse().join(""); };
  var a = r(e.getAttribute("data-u")) + "@" + r(e.getAttribute("data-d"));
  var l = document.createElement("a"); l.href = "mailto:" + a; l.textContent = a;
  e.replaceWith(l);
})();
</script>
