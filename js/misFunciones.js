//-----------------------------------Categorias-----------------------------------//
function traerCategorias() {
    $.ajax({
        url: "http://129.151.116.81:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarCategorias(respuesta);
        }
    });

}
function pintarCategorias(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";   
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultadoCat").html(myTable);
}

function guardarCategorias () {
    let myData = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val(),
        
    };
    $.ajax({
        type: "POST",
        contentType:"application/json; charset=utf8",
        datatype: "JSON",
        data: JSON.stringify(myData),

        url: "http://129.151.116.81:8080/api/Category/save",
        
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente")
            alert("Se guardo correctamente")
            window.location.reload()
        },
        error: function(jqXHR, textStatus,errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
        });
}

//-----------------------------------Disfraces-----------------------------------//
function traerDisfraces() {
    $.ajax({
        url: "http://129.151.116.81:8080/api/Costume/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarDisfraces(respuesta);
        }
    });

}
function pintarDisfraces(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";  
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>"; 
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultadoD").html(myTable);
}

function guardarDisfraces() {
    let myData2 = {
        name: $("#Dname").val(),
        brand: $("#Dbrand").val(),
        year: $("#Dyear").val(),
        description: $("#Ddescription").val(),
    };
    $.ajax({
        type: "POST",
        contentType:"application/json; charset=utf8",
        datatype: "JSON",
        data: JSON.stringify(myData2),

        url: "http://129.151.116.81:8080/api/Costume/save",
        
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente")
            alert("Se guardo correctamente")
            window.location.reload()
        },
        error: function(jqXHR, textStatus,errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
        });
}
//-----------------------------------Clientes-----------------------------------//
function traerClientes() {
    $.ajax({
        url: "http://129.151.116.81:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarClientes(respuesta);
        }
    });

}
function pintarClientes(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";  
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>"; 
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultadoCl").html(myTable);
}

function guardarClientes() {
    let myData3 = {
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),
    };
    $.ajax({
        type: "POST",
        contentType:"application/json; charset=utf8",
        datatype: "JSON",
        data: JSON.stringify(myData3),

        url: "http://129.151.116.81:8080/api/Client/save",
        
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente")
            alert("Se guardo correctamente")
            window.location.reload()
        },
        error: function(jqXHR, textStatus,errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
        });
}
//-----------------------------------Mensajes-----------------------------------//
function traerMensajes() {
    $.ajax({
        url: "http://129.151.116.81:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarMensajes(respuesta);
        }
    });

}
function pintarMensajes(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>"; 
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultadoM").html(myTable);
}

function guardarMensajes() {
    let myData4 = {
        messageText: $("#messageText").val(),
    };
    $.ajax({
        type: "POST",
        contentType:"application/json; charset=utf8",
        datatype: "JSON",
        data: JSON.stringify(myData4),

        url: "http://129.151.116.81:8080/api/Message/save",
        
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente")
            alert("Se guardo correctamente")
            window.location.reload()
        },
        error: function(jqXHR, textStatus,errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
        });
}

//-----------------------------------Reservaciones-----------------------------------//
function traerReservaciones() {
    $.ajax({
        url: "http://129.151.116.81:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarReservaciones(respuesta);
        }
    });

}
function pintarReservaciones(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>"; 
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultadoR").html(myTable);
}

function guardarReservaciones() {
    let myData5 = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };
    $.ajax({
        type: "POST",
        contentType:"application/json; charset=utf8",
        datatype: "JSON",
        data: JSON.stringify(myData5),

        url: "http://129.151.116.81:8080/api/Reservation/save",
        
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente")
            alert("Se guardo correctamente")
            window.location.reload()
        },
        error: function(jqXHR, textStatus,errorThrown){
            window.location.reload()
            alert("No se guardo correctamente")
        }
        });
}


