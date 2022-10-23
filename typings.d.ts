interface Category {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: 'category';

    slug: {
        _type: 'slug';
        current: string;
    };
    title: string;
}

// We can use image directly, but in order to
// rehuse the code this is a better option.
interface Image {
    _key: string;
    _type: string;
    asset: {
        url: string;
    };
}

interface Product {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: 'product';

    slug: {
        _type: 'slug';
        current: string;
    };

    description: string,
    category: {
        _type: 'reference';
        _ref: string;
    };
    
    image: Image[];
}