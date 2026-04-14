import { useState, useEffect } from "react";
export default function useTranslations(lang) {
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTranslations() {
            try {
                const response = await fetch(`
                    ${import.meta.env.VITE_API_URL}/api/translations/${lang}
                    `);
                const data = await response.json();
                setTranslations(data);
            } catch (err) {
                console.error('Failed to load translations', err);
            } finally {
                setLoading(false);
            }
        }
        fetchTranslations();
    }, [lang]);
    const t = (key) => translations[key] || key;
    return { t, loading };
}