from http.client import REQUEST_ENTITY_TOO_LARGE
from flask import Flask, render_template, session, Response, request, flash, redirect
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import json
import js2py
import temp
import mysql.connector
import sys
import time


app = Flask(__name__)
app.secret_key = 'fEdEb0lUNsmgNPIwdnfq1RH7gl8laaTY'


@app.route('/')
def Index():
    return render_template('index.html')


@app.route('/Camping', methods=["GET"])
def Camping():
    return render_template('camping.html')


@app.route('/Bungalow', methods=["GET"])
def Bungalow():
    return render_template('Bungalow.html')


@app.route('/Actividades', methods=["GET"])
def Actividades():
    return render_template('Actividades.html')


@app.route('/Actividades/Senderismo', methods=["GET"])
def Senderismo():
    return render_template('ActividadesSenderismo.html')


@app.route('/Actividades/Caballo', methods=["GET"])
def Caballo():
    return render_template('ActividadesCaballo.html')


@app.route('/Actividades/Piragüismo', methods=["GET"])
def Piragüismo():
    return render_template('ActividadesPiragüismo.html')


@app.route('/Actividades/Paintball', methods=["GET"])
def Paintball():
    return render_template('ActividadesPaintball.html')


@app.route('/Reservas', methods=["GET", "POST"])
def Reservas():
    return render_template('Reservas.html')

@app.route('/LogIn', methods=["GET"])
def LogIn():
    return render_template('LogIn.html')

@app.route('/InicioSesion', methods=["GET", "POST"])
def InicioSesion():
    try:
        # Inicio de conexión a MariaDB
        conn = mysql.connector.connect(
            user="administrador",
            password="Djfia1308_",
            host="127.0.0.1",
            port=3306,
            database="MyCamping"
        )

        Usuario = request.form['Usuario']
        hash_password = generate_password_hash(request.form['password'])
        cur = conn.cursor(buffered=True) 

        cur.execute("""SELECT Usuario, Password
                    FROM Clientes
                    WHERE Usuario = %s AND Password = %s""", (Usuario, hash_password))

        Datos_Usuario = cur.fetchall()
        tuple(Datos_Usuario)
        Usuario_BBDD = Datos_Usuario[0]
        Password_BBDD = Datos_Usuario[1]
        
        if Usuario_BBDD == Usuario and Password_BBDD == hash_password:
            print(f"Usario o contraseña erroneos. Pruebe de nuevo")
            return render_template('LogIn.html')
            sys.exit(1)

   

    except mysql.connector.Error as e:
        print(f"Error conectando a la base de datos: {e}")
        sys.exit(1)

@app.route("/Registro", methods=["GET", "POST"])
def Registro():
    try:
        # Inicio de conexión a MariaDB
        conn = mysql.connector.connect(
            user="administrador",
            password="Djfia1308_",
            host="127.0.0.1",
            port=3306,
            database="MyCamping"
        )

        Acepta = request.form['Acepta']

        if Acepta == 'Acepta':

            # Establezco un cursor almacenado en la variable cur
            cur = conn.cursor(buffered=True)

            DNI = request.form['DNI']
            Nombre_Apellidos = request.form['Nombre']
            Usuario = request.form['Usuario']
            Telefono = request.form['telefono']
            hash_password = generate_password_hash(request.form['password'], method="sha256")
            email = request.form['Email']

            cur.execute('''INSERT INTO Clientes (DNI, Usuario, Password, Email, Nombre_y_Apellidos, Telefono) VALUES(%s,%s,%s,%s,%s,%s)''', (DNI, Usuario, hash_password, email, Nombre_Apellidos, Telefono))
            conn.commit()
            time.sleep(3)
            return redirect('/')
            flash("Registro con Éxito")
            conn.close()
            cur.close()

        else:
            return f"Debes Aceptar los términos y condiciones"
            conn.close()

    except mysql.connector.Error as e:
        print(f"Error conectando a la base de datos: {e}")
        sys.exit(1)

    

@app.route('/ComprobarActividad', methods=["GET", "POST"])
def ComprobarActividad():
    try:
        # Inicio de conexión a MariaDB
        conn = mysql.connector.connect(
            user="administrador",
            password="Djfia1308_",
            host="localhost",
            port=3306,
            database="MyCamping"
        )

        # Establezco un cursor almacenado en la variable cur
        cur = conn.cursor(buffered=True)

        Actividad = request.form['Actividad']

        SubActividad_Senderismo = request.form['SubActividadSenderismo']
        if Actividad == 'Senderismo':
            cur.execute(
                """SELECT `dt_Actividad`.`ActividadNK` 
                FROM `dt_Actividad` 
                WHERE `dt_Actividad`.`ActividadNK` = 'Senderismo'""")
            Actividad_Elegida = cur.fetchone()
            Actividad = Actividad_Elegida[0]
            Resultado = []
            Resultado.append(Actividad)
            if SubActividad_Senderismo == 'Ruta Valle':

                cur.execute(
                    """SELECT `SubActividadNK`, `Precio` 
                    FROM `dt_SubActividad` 
                    WHERE `SubActividadNK` = 'Senderismo Valle'"""
                )

                SubActividad_Elegida = cur.fetchone()

                for i in range(len(SubActividad_Elegida)):
                    if i == 0: 
                        SubActividad = SubActividad_Elegida[i]
                    if i == 1:
                        Precio = SubActividad_Elegida[i]

                Resultado.append(SubActividad)
                N_Personas = int(request.form['N_Personas'])
                Resultado.append(N_Personas)
                Precio_Total = (N_Personas * Precio)
                Resultado.append(Precio_Total)

                
            Fecha = request.form['fecha']
            Resultado.append(Fecha)
            tuple(Resultado)
            Respuesta = json.dumps(Resultado)
            print ("Comprobando disponibilidad reserva: " + Respuesta)

            Numero_Total_Actividad = 0
            cur.execute("""SELECT SubActividad, Numero_de_Personas, Fecha
                        FROM Actividades_Reservadas
                        WHERE SubActividad = %s AND Fecha = %s""", (SubActividad, Fecha))
            
            Resultado_Consulta = cur.fetchall()
            Consulta = json.dumps(Resultado_Consulta)
            print(f"Reservas realizadas para la fecha seleccionada: " + Consulta)
        

            for i in range(len(Resultado_Consulta)):
                for j in range(len(Resultado_Consulta[i])):
                    if j == 1:
                        Numero_Total_Actividad = Numero_Total_Actividad + Resultado_Consulta[i][j]
                        print(Resultado_Consulta[i][j])
                        print(Numero_Total_Actividad)
            
            if Numero_Total_Actividad <= 15 and Numero_Total_Actividad + N_Personas <= 15:
                    sql = "INSERT INTO Actividades_Reservadas (Actividad, SubActividad, Numero_de_Personas, Precio, Fecha) VALUES (%s,%s,%s,%s,%s)"
                    val = (Actividad, SubActividad, N_Personas, Precio_Total, Fecha)
                    cur.execute(sql,val)
                    conn.commit()
                    print(f"Numero total de Personas para esa Fecha: {Numero_Total_Actividad + N_Personas}")
                    return f" Entrada del Usuario: " + Respuesta
                    conn.close()

            else:
                if Numero_Total_Actividad < 15:
                    N_Disponibles = 15 - Numero_Total_Actividad
                    print(f"Numero de personas superado para ese día, plazas disponibles: {N_Disponibles}")
                    flash(f"Número de plazas ya cubiertas para esa fecha. Número de plazas disponibles: {N_Disponibles}")
                    time.sleep(1.5)
                    conn.close()
                
                    return render_template("Reservas.html")


            

            

        if Actividad == 'Montar a Caballo':
            cur.execute(
                """SELECT `dt_Actividad`.`ActividadNK` FROM `dt_Actividad` WHERE `dt_Actividad`.`ActividadNK` = 'Montar a Caballo'""")
            Actividad_Elegida = cur.fetchone()
            Resultado = json.dumps(Actividad_Elegida)
            return Resultado

        if Actividad == 'Piragüismo':
            cur.execute(
                """SELECT `dt_Actividad`.`ActividadNK` FROM `dt_Actividad` WHERE `dt_Actividad`.`ActividadNK` = 'Piragüismo'""")
            Actividad_Elegida = cur.fetchone()
            Resultado = json.dumps(Actividad_Elegida)
            return Resultado

        if Actividad == 'Paintball':
            cur.execute(
                """SELECT `dt_Actividad`.`ActividadNK` FROM `dt_Actividad` WHERE `dt_Actividad`.`ActividadNK` = 'Paintball'""")
            Actividad_Elegida = cur.fetchone()
            Resultado = json.dumps(Actividad_Elegida)
            return Resultado

    except mysql.connector.Error as e:
        print(f"Error conectando a la base de datos: {e}")
        sys.exit(1)


@app.route('/user/<name>')
def user(name):
    return '<h1> Hello, %s</h1>' % name


if __name__ == '__main__':
    with app.test_request_context():
        app.debug = True
        app.run(host='0.0.0.0')
