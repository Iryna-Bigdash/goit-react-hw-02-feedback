import { FeedbackList, FeedbackItem, FeedbackBtn } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackItem key={option}>
          <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackBtn>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
}
