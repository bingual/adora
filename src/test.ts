// 패스워드 체크
import bcrypt from 'bcrypt';

const login = async () => {
    const compare_password = await bcrypt.compare(
        String('qwer1234!').trim(),
        '$2b$10$CBZhcVZDdK1VMTfSWXkdpu0IUDjU1n8bPzw/EMLz3TEQDVg3K.cgG',
    );
    console.log(compare_password);
};

login();
