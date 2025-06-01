interface UseCurrencyFormatterOptions {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

const useCurrency = ({
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
}: UseCurrencyFormatterOptions = {}) => {
    return (value: number) => {
        const formatted = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits,
            maximumFractionDigits,
        }).format(value);

        // Replace ₹ with ₹ followed by two spaces
        return formatted.replace('₹', '₹  ');
    };
};

export default useCurrency;
