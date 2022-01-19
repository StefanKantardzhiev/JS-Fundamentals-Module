function vacation(group, type, dayOfWeek) {

    let price = 0;
    let total = 0;


    switch (type) {
        case "Students":
            if (dayOfWeek === "Sunday") {
                price = 10.46;
                total = price * group;
            }
            if (dayOfWeek === "Friday") {
                price = 8.45
                total = price * group;
            }
            if (dayOfWeek === "Saturday") {
                price = 9.80
                total = price * group;
            }
            if (group >= 30) {

                total = total - total * 0.15
            }
            break;
        case "Business":
            if (group >= 100) {
                group = group - 10
            }
            if (dayOfWeek === "Sunday") {
                price = 16;
                total = price * group;
            }
            if (dayOfWeek === "Friday") {
                price = 10.90;
                total = price * group;
            }
            if (dayOfWeek === "Saturday") {
                price = 15.60
                total = price * group;
            }
            break;

        case "Regular":
            if (dayOfWeek === "Sunday") {
                price = 22.50;
                total = price * group;
            }
            if (dayOfWeek === "Friday") {
                price = 15;
                total = price * group;
            }
            if (dayOfWeek === "Saturday") {
                price = 20;
                total = price * group;
            }
            if (group >= 10 && group <= 20) {
                total = total - total * 0.05
                
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)


}