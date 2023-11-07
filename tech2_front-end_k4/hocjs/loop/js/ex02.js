var rows1 = "";

for (var cols = 1; cols <= 5; cols++) {
  var line = "";

  for (var i = 1; i <= 10; i++) {
    line += `<p>${cols} x ${i} = ${cols * i}</p>`;
  }

  console.log(line);

  rows1 += `<td>
    ${line}
  </td>`;
}

var rows2 = "";

for (var cols = 6; cols <= 10; cols++) {
  var line = "";

  for (var i = 1; i <= 10; i++) {
    line += `<p>${cols} x ${i} = ${cols * i}</p>`;
  }

  rows2 += `<td>
    ${line}
  </td>`;
}

var html = `<table width="100%" border="1">
<tr>
  ${rows1}
</tr>
<tr>
  ${rows2}
</tr>
</table>`;

document.write(html);
