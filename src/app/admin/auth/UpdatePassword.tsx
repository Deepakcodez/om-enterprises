import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import axios from 'axios';
import toast from 'react-hot-toast';
import useCookies from '@/hooks/useCookies';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const UpdatePassword: React.FC = () => {
    const [prevPassword, setPrevPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigate = useRouter();
    const { setToken, getToken } = useCookies()
    const token = getToken()

    const changeHandler = async () => {
        const resp = await axios.put(
            `${process.env.BASE_URL}/api/v1/admin/update/password`,    
            {newPassword, prevPassword},
            {
                headers: {
                    Authorization: token,
                },
            }

        )
        console.log(resp)
        if (resp.status === 200) {
            console.log(resp.data)
            setToken(resp.data.token)

            navigate.push('/admin/login');


        }
        else {
            toast.error("failed to login")
        }
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) return;
        await changeHandler();
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <Image src={logo} alt="Logo" className='h-12  mx-auto' />
                <h2 className="text-2xl text-gray-900/50 font-bold mb-6 text-center">Update Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="Enter Prev Password"
                        value={prevPassword}
                        onChange={(e) => setPrevPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
                        required
                    />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300"
                    >
                        Change
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdatePassword;