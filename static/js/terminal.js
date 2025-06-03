function procesarComando(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = document.getElementById('terminal-input');
        const output = document.getElementById('terminal-output');
        const comando = input.value.trim();

        if (comando) {
            output.innerHTML += `mayma/admin/@usuario~$ ${comando}\n`;

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: CLEAR Y CLS */
            if (comando === 'clear' || comando === 'cls') {
                output.innerHTML = '';

            } 
            
            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: HELP */
            else if (comando === 'help') {
                output.innerHTML += 'Comandos disponibles:\n' 
                + '- help: Muestra los comandos que puede haber en el sistema.\n' 
                + '- clear: Limpia la pantalla de la terminal.\n' 
                + '- datetime: Muestra la fecha y la hora actual.\n'
                + '- file: Muestra archivos guardados en el sistema.\n'
                + '- user: Muestra los datos del usuario que esta autenticado actualmente.\n'
                + '- report: Muestra reportes en el sistema.\n'
                + '- cls: Limpia la pantalla de la terminal.\n'
                + '- allusers: Muestra los usuarios en el sistema.\n'
                + '- alladmin: Muestra los administradores en el sistema.\n'
                + '- filter: Muestra datos especificos en el sistema.\n'
                ;

            }

            /* ****************************************************************************** */
            /* SUBCOMANDO */

           else if (comando === 'help -h') {
                output.innerHTML += 'Comandos disponibles:\n' 
                + '- help: Muestra los comandos que puede haber en el sistema.\n' 
                + '- clear: Limpia la pantalla de la terminal.\n' 
                + '- datetime: Muestra la fecha y la hora actual.\n'
                + '- file: Muestra archivos guardados en el sistema.\n'
                + '- user: Muestra los datos del usuario que esta autenticado actualmente.\n'
                + '- report: Muestra reportes en el sistema.\n'
                + '- cls: Limpia la pantalla de la terminal.\n'
                + '- allusers: Muestra los usuarios en el sistema.\n'
                + '- alladmin: Muestra los administradores en el sistema.\n'
                + '- filter: Muestra datos especificos en el sistema.\n'
                ;

            }
            
            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: DATETIME */
            else if (comando === 'datetime') {    // Muestra la fecha y hora actual
                const nameDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
                const nameMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

                const date = new Date();

                let weekDays = nameDays[date.getDay()];
                let yearMonth = nameMonth[date.getMonth()];

                let monthDays = date.getDate();
                let year = date.getFullYear();
                let hour = date.getHours();
                let minutes = date.getMinutes();

                let hourFormat = String(hour).padStart(2, '0');
                let minutesFormat = String(minutes).padStart(2, '0');

                output.innerHTML += `Fecha Actual: ${weekDays} ${monthDays} de ${yearMonth} de ${year} \n`
                                + `Hora Actual: ${hourFormat} : ${minutesFormat} horas \n`;

            } 
            
            /* ****************************************************************************** */
            /* SUBCOMANDO */
            
            else if (comando == 'datetime /t' || comando === 'datetime -t') {
                const date = new Date();

                let hour = date.getHours();
                let minutes = date.getMinutes();

                let hourFormat = String(hour).padStart(2, '0');
                let minutesFormat = String(minutes).padStart(2, '0');

                output.innerHTML += `Hora Actual: ${hourFormat} : ${minutesFormat} horas \n`;

            } 
            
            /* ****************************************************************************** */
            /* SUBCOMANDO */
            else if (comando === 'datetime /d' || comando === 'datetime -d') {
                const nameDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
                const nameMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

                const date = new Date();

                let weekDays = nameDays[date.getDay()];
                let yearMonth = nameMonth[date.getMonth()];

                let monthDays = date.getDate();
                let year = date.getFullYear();

                output.innerHTML += `Fecha Actual: ${weekDays} ${monthDays} de ${yearMonth} de ${year} \n`;

            } 
            
            /* ****************************************************************************** */
            /* SUBCOMANDO */
            else if (comando === 'datetime /h' || comando === 'datetime -h') {
                output.innerHTML += 'Muestra la fecha y hora actual: \n'
                                + 'datetime /h: Muetra las extensiones del comando \n'
                                + 'datetime /d: Muestra la fecha actual \n'
                                + 'datetime /t: Muestra la hora actual \n';
            } 

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: FILE */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: USER */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: REPORT */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: ALLUSERS */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: ALLADMIN */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: FILTER */

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: VER */
            else if (comando === 'ver' || comando === 'version') {
                output.innerHTML += 'Version: v1.0.1'
            }

            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* COMANDO: MAYMA */
            else if (comando === 'mayma' || comando === 'mayma') {
                output.innerHTML += 'MaymaTerminal - v1.0.1\n'
                    + 'Mayma Ambiental - Todos los derechos reservados\n';
            }
            
            /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
            /* CUANDO EL COMANDO NO EXISTE */
            else {
                output.innerHTML += `El comando --${comando}-- no existe\n`
            }

            input.value = '';   // Si no se escribe el comando y se presiona la tecla enter
            // Auto scroll
            const terminalBody = document.getElementById('terminal-body');
            terminalBody.scrollTop = terminalBody.scrollHeight;
        
        } else {
            output.innerHTML += 'mayma/admin/@usuario~$ \n';
        }
    }
}
