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
  const startOfWorkInMinutes = getTimeInMinutes(startOfWork);
  const endOfWorkInMinutes = getTimeInMinutes(endOfWork);
  const startOfMeetingInMinutes = getTimeInMinutes(startOfMeeting);
  const endOfMeetingInMinutes = startOfMeetingInMinutes + meetingDuration;
  const result = (startOfWorkInMinutes <= startOfMeetingInMinutes) && (endOfWorkInMinutes >= endOfMeetingInMinutes);
  return result;
};

void(isMaxLengthValid, isPalindrome, parseDigits, isMeetingTimeFits);
