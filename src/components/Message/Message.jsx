import css from './Message.module.css';

export const Message = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Contact list is empty.</p>
    </div>
  );
};
