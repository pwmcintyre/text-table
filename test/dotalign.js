var test = require('tape');
var table = require('../');

test('dot align', function (t) {
    t.plan(1);
    var s = table([
        [ 'beep', '1024', 'post'],
        [ 'boop', '334.212', 'post'],
        [ 'boop', '321.123456789', 'post'],
        [ 'foo', '1006', 'post'],
        [ 'bar', '45.6', 'post'],
        [ 'baz', '123.', 'post'],
    ], { align: [ 'l', '.', 'l' ] });
    t.equal(s, [
        'beep  1024            post',
        'boop   334.212        post',
        'boop   321.123456789  post',
        'foo   1006            post',
        'bar     45.6          post',
        'baz    123.           post',
    ].join('\n'));
});
