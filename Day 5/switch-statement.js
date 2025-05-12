var age =75;
        switch (true) {
            case (age < 13):
                document.write("You are a minor");
                break;
            case (age >= 13 && age < 18):
                document.write("You are a teenager");
                break;
            case (age >= 18 && age <= 30):
                document.write("You are Young");
                break;
            case (age >= 30 && age <= 50):
                document.write("You are middle aged");
                break;
            case (age >= 50 && age <=75):
                document.write("You are old");
                break;
            default:
                document.write("Enter your age");
        }