import React, { useState } from 'react';
import s from './ContactForm.module.css';
import Button from '../Button/Button';
import CustomSelect from './CustomSelect';

const ContactForm = () => {
    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [sessionType, setSessionType] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFioChange = (e) => {
        if (/^[а-яё\s]*$/i.test(e.target.value) || e.target.value === '') {
            setFio(e.target.value);
        }
    };

    const handlePhoneChange = (e) => {
        const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
        let formatted = '+7 ';
        if (digits.length > 1) formatted += '(' + digits.slice(1, 4);
        if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7);
        if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);
        if (digits.length >= 9) formatted += '-' + digits.slice(9, 11);
        setPhone(formatted.trim());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fio || !phone || !sessionType || !agreed) {
            return alert('Заполните все поля и согласитесь');
        }

        try {
            const res = await fetch('https://your-server.onrender.com/send', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fio, phone, sessionType })
            });

            const data = await res.json();

            if (res.ok) {
                setIsModalOpen(true);
                setFio('');
                setPhone('');
                setSessionType('');
                setAgreed(false);
            } else {
                alert(data.message || 'Ошибка сервера');
            }
        } catch (err) {
            alert('Ошибка при отправке заявки. Проверьте сервер и сеть.');
            console.error(err);
        }
    };

    return (
        <section className={s.contact}>
            <h2 className={s.title}>Понравились наши фотосессии?</h2>
            <p className={s.subtitle}>
                Оставьте заявку — и мы свяжемся с вами, чтобы обсудить все детали вашей уникальной фотосессии.
            </p>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ФИО"
                    value={fio}
                    onChange={handleFioChange}
                    className={s.input}
                    required
                />
                <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={s.input}
                    required
                    maxLength={18}
                />
                <CustomSelect value={sessionType} onChange={setSessionType} />
                <label className={s.checkboxWrapper}>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        required
                    />
                    <span>Я согласен на обработку персональных данных и с правилами пользования Платформы</span>
                </label>
                <Button className={s.btn} text="Оставить заявку" />
            </form>

            {isModalOpen && (
                <div className={s.modalOverlay}>
                    <div className={s.modal}>
                        <p>Заявка оставлена! <br /> Мы свяжемся с вами в ближайшее время.</p>
                        <button onClick={() => setIsModalOpen(false)} className={s.modalButton}>Закрыть</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactForm;
