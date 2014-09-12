/**
 * Created by javarouka on 2014. 9. 12..
 */

test('size helper', function() {

    var testValue = [1, 2, 3, 4, 5],
        template = $("#size-helper").html(),
        compiled = Handlebars.compile(template),
        area = $("#test-area").empty(),
        html = compiled(testValue);

    area.append(html);

    ok(Number(area.find(".size-text").html().trim()) == testValue.length);

});

test('when helper equals', function() {

    var template = $("#when-helper").html(),
        compiled = Handlebars.compile(template),
        area = $("#test-area").empty();

    var html = compiled({
            left: 1,
            right: 1
        });

    area.append(html);

    ok(Number(area.find(".when-text").size() > 0, "OK!"));

    html = compiled({
        left: 1,
        right: 2
    });

    area.empty().append(html);

    ok(Number(area.find(".when-text").size() == 0, "OK!"));

});
