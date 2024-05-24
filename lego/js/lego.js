document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');

    button.addEventListener('click', function() {
        var div = document.createElement('div');
        div.textContent = 'You clicked the button!';
        document.body.appendChild(div);
        $("#output").append('<div class="text"><p>' + textContent + '</p></div>');

    });
});