const ejs = require("ejs");
const beautify_html = require("js-beautify").html;

let input = `
<% let users = ["Thắng", "Nam", "Huy"]; %>
<html>
    <body>
        <h1>Danh sách thành viên:</h1>
        <% for (let i = 0; i < users.length; i++) { %>
            <% let user = users[i] %>
            <% if (user != "Nam") { %>
                <p><%- user %></p>
            <% } %>
        <% } %>
    </body>
</html>
`;

let engine = function (str) {
	const result = ejs.render(str, null, { rmWhitespace: true });
	const transformedResult = result.replace(/\r?\n|\r/g, "");
	return beautify_html(transformedResult, {
		indent_inner_html: true,
	});
};

let result = engine(input);
console.log(result);
let output = `
<html>
    <body>
        <h1>Danh sách thành viên:</h1>
        <p>Thắng</p>
        <p>Huy</p>
    </body>
</html>
`;
