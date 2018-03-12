if (typeof (dojo) != "undefined") {
    require(["dojo/domReady!"], function () {
        try {
            dojo.place(
                '<link rel="stylesheet" type="text/css" href="/files/customizer/Lab2/profilesCustomization.css\"></link>',
                dojo.doc.head,
                'last'
            );
        } catch (e) {
            alert('exception occurred in HelloWorld : ' + e);
        }
    });
}
