import React from 'react'
import CategoryCard from '../Products/CategoryCard'

const Categories = () => {
  return (
    <div className='p-5' >
        <p>Explore and get the best 🦹🏻‍♂️</p>
        <h1 className="text-2xl mb-3" > ⋆⭒˚.⋆ Categories</h1>
        <div className='flex flex-wrap justify-around gap-3'>
            <CategoryCard imageUrl={"https://down-ph.img.susercontent.com/file/33a3e0684d2ee19808ef25185c11773e"} title="Cookware" />
            <CategoryCard imageUrl={"https://www.joyye.com/u_file/2504/photo/bc2f051769.webp"} title="Bakeware" />
            <CategoryCard imageUrl={"https://www.letifly.com/cdn/shop/articles/vintage-western-gold-plated-cutlery-24pcs-dining-knives-forks-teaspoons-set-golden-luxury-dinnerware-engraving-tableware-set.jpg?v=1607881926"} title="Cutlery" />
            <CategoryCard imageUrl={"https://m.media-amazon.com/images/I/61F4F2fju4L._AC_UF894,1000_QL80_.jpg"} title="Dinnerware" />
            <CategoryCard imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHKvW4-DWtZwLKnBKQ64v1ou63dZSM8Cyjg&s"} title="Appliances" />
            <CategoryCard imageUrl={"https://i.pinimg.com/736x/55/7b/8a/557b8a023ea57f88dbda1a1fb2ef06d4.jpg"} title="Glassware" />
            <CategoryCard imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9JjeYvGxZhrfk9Tg6EhYeLQIgjitf3ZYvg&s"} title="Storage" />
            <CategoryCard imageUrl={"https://images.stockcake.com/public/1/d/9/1d911e10-e9bc-45a8-bbc9-06a844d28a03_large/vintage-kitchen-tools-stockcake.jpg"} title="Utensils" />
            <CategoryCard imageUrl={"https://oggnhome.com/cdn/shop/articles/DALL_E_2024-12-18_18.44.57_-_A_collection_of_mango_wooden_kitchen_accessories_displayed_on_a_rustic_wooden_table._The_image_includes_beautifully_crafted_wooden_chopping_boards_wo_3f6c0404-bbf1-416b-948c-c4ff5ef56703.webp?v=1734528054"} title="Accesories" />
            <CategoryCard imageUrl={"https://m.media-amazon.com/images/I/712HanDGjcL.jpg"} title="Drinkware" />
            <CategoryCard imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQxp-Rztu74Tvudi98TxeytVD7OsWMzjDtQ&s"} title="Coffee & Tea" />
            <CategoryCard imageUrl={"https://thumbs.dreamstime.com/b/cleaning-supplies-yellow-accents-flowers-arranged-clean-fresh-home-aesthetic-still-life-creating-serene-377753136.jpg"} title=" Cleaning" />
            

        </div>


    </div>
  ) 
}

export default Categories