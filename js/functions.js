const isMaxLengthValid = (text, maxLength) => text.length <= maxLength;

const isPalindrome = (sequence) => {
  const textToCheck = String(sequence).replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < textToCheck.length / 2; i++) {
    if (textToCheck.at(i) !== textToCheck.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
};

const getTimeInMinutes = (stringTime) => {
  const [hours, minutes] = stringTime.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingTimeFits = (startOfWork, endOfWork, startOfMeeting, meetingDuration) => {
  startOfWork = getTimeInMinutes(startOfWork);
  endOfWork = getTimeInMinutes(endOfWork);
  startOfMeeting = getTimeInMinutes(startOfMeeting);
  const endOfMeeting = startOfMeeting + meetingDuration;
  return (startOfWork <= startOfMeeting) && (endOfWork >= endOfMeeting);
};

void(isMaxLengthValid, isPalindrome, parseDigits, isMeetingTimeFits);
