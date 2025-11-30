$('#username').change(function() {
    var value = $(this).val().trim();
    $.ajax({
        url: `https://api.github.com/users/${value}`,
        method: 'GET',
        success: function(data) {
            console.log(data);
            $('#information').html(`
                <h1>${data.login}</h1>
                <img src="${data.avatar_url}" alt="user image">
                <a href="${data.html_url}" target="_blank" class="link">Link to profile</a>
            `);
        },
        error: function(error) {
            console.log(error);
        }
    });
});
