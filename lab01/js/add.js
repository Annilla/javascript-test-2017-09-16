$(document).ready(function(){
    $('#add').on('click', function(){
        var first = parseInt($('#first').val());
        var second = parseInt($('#second').val());

        var calculator = new Calculator();
        var result = calculator.Add(first, second);

        $('#result').text(result);
    });
});