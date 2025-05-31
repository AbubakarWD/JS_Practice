// a= prompt("Enter your name");
        // document.write(a);

        var per = prompt("Enter your marks");
        if (per < 100 && per >= 90) {
            document.write("Your grade is A+");
        }
        else if (per < 90 && per >= 80) {
            document.write("Your grade is A");
        }
        else if (per < 80 && per >= 70) {
            document.write("Your grade is B");
        }
        else if (per < 70 && per >= 60) {
            document.write("Your grade is C");
        }
        else if (per < 60 && per >= 50) {
            document.write("Your grade is D");
        }
        else if (per < 50 && per >= 40) {
            document.write("Your grade is E");
        }
        else {
            document.write("Your grade is F");
        }