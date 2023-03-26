import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const [sellerEmail, setSellerEmail] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setIsSeller(data.isSeller);
                        setAdminLoading(false);
                        setSellerEmail(data.email);
                    };
                });
        }
    }, [email]);
    return [isSeller, adminLoading,sellerEmail];

};

export default useSeller;