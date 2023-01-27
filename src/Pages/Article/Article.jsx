import React from 'react';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import Navbar from '../../Components/Navbar/Navbar';

const Article = () => {
    return (
        <>
            <header className='light__header'>
                <Navbar />
            </header>
            <main>
                <section className='article'>
                    <div className="container">
                        <ArticleCard />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Article;
