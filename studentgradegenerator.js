function studentGrade(marks) {
    // if marks are between 80 and 100 (inclusive)
    if (marks > 79 && marks <= 100) {
        return "A";
    }
    // if marks are between 60 and 79 (inclusive)
    else if (marks >= 60 && marks <= 79) {
        return "B";
    }
    // if marks are between 50 and 59 (inclusive)
    else if (marks >= 50 && marks <= 59) {
        return "C";
    }
    // if marks are between 40 and 49 (inclusive)
    else if (marks >= 40 && marks <= 49) {
        return "D"
    }
    // if marks are between 0 and 39 (inclusive)
    else if (marks <= 39 && marks >= 0) {
        return "E";
    }
    // If marks are outside the valid range
    else {
        return "invalid Grade";
    }
}