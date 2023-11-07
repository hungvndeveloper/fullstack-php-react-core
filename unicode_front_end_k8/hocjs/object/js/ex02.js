/*
- Object 1 cấp
- Object lồng object
- Object trong mảng
- Object bọc mảng
*/

var users = [
  {
    name: "Hoàng An",
    age: 30,
    job: {
      company: "Unicode Academy",
      postion: "Trainer",
    },
    history: [
      {
        year: 2019,
        job: "Công việc 1",
      },

      {
        year: 2020,
        job: "Công việc 2",
      },

      {
        year: 2021,
        job: "Công việc 3",
      },

      {
        year: 2022,
        job: "Công việc 4",
      },
    ],
  },

  {
    name: "Hoàng An",
    age: 30,
    job: {
      company: "Unicode Academy",
      postion: "Trainer",
    },
    history: [
      {
        year: 2019,
        job: "Công việc 1",
      },

      {
        year: 2020,
        job: "Công việc 2",
      },

      {
        year: 2021,
        job: "Công việc 3",
      },

      {
        year: 2022,
        job: "Công việc 4",
      },
    ],
  },

  {
    name: "Hoàng An",
    age: 30,
    job: {
      company: "Unicode Academy",
      postion: "Trainer",
    },
    history: [
      {
        year: 2019,
        job: "Công việc 1",
      },

      {
        year: 2020,
        job: "Công việc 2",
      },

      {
        year: 2021,
        job: "Công việc 3",
      },

      {
        year: 2022,
        job: "Công việc 4",
      },
    ],
  },
];

var detail = "";
if (users.length) {
  users.forEach(function (user) {
    var historyHtml = "";
    if (user.history.length) {
      user.history.forEach(function (item) {
        historyHtml += `
            <tr>
                <td>${item.year}</td>
                <td>${item.job}</td>
            </tr>
        `;
      });
    }

    detail += `<tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>
        Công ty: ${user.job.company} <br/>
        Vị trí: ${user.job.postion}
        </td>
        <td>
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <th>Năm</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    ${historyHtml}
                </tbody>
            </table>
        </td>
        </tr>`;
  });
}

var html = ` <table width="100%" border="1">
<thead>
    <tr>
        <th>Tên</th>
        <th>Tuổi</th>
        <th>Công việc</th>
        <th>Lịch sử</th>
    </tr>
</thead>
<tbody>
    ${detail}
</tbody>
</table>`;

document.write(html);
