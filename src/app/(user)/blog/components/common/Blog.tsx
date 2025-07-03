import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-4  bg-violet-50/60 rounded-2xl p-12">
      <Image
        src={"/career.jpeg"}
        alt="title"
        height={1200}
        width={1200}
        className="w-full aspect-video rounded-2xl "
      />

      <div className="flex flex-col gap-12 ">
        <h1 className="text-black  text-ellipsis line-clamp-2  text-3xl ">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus facilis iste sed!
        </h1>
        <p className="text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illum earum ullam quos hic quis minima dicta rerum maxime magnam quo, excepturi quas voluptatem quasi doloremque ipsum accusamus facere vitae totam, voluptatibus laborum odio mollitia. Cum officia modi deserunt quod itaque dolorem nemo, praesentium iusto quam tempora quo magni ut et tempore corporis quas. Dolor fuga reprehenderit sit libero. Modi laudantium harum sunt optio incidunt quaerat a vel ipsa culpa ab inventore illum perferendis, esse cupiditate exercitationem necessitatibus non placeat omnis velit impedit saepe debitis! Odit quasi eius maiores quos, temporibus laborum dolorum iusto exercitationem perspiciatis deserunt laboriosam obcaecati architecto esse explicabo incidunt dolor suscipit cupiditate vitae illo eaque molestias? Iure odit deserunt aut molestias, pariatur voluptatem, blanditiis itaque ipsum doloremque sequi deleniti dicta fugit debitis quia ad ex sunt iste voluptatum ducimus doloribus error quas. Ratione, iusto, aliquid eaque esse quae veritatis quia id repellat error nulla similique qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo eos officia a consectetur? Assumenda sequi harum, inventore ex commodi officiis vel sapiente qui pariatur. Officiis error modi fugiat incidunt distinctio, tempora facilis neque? Temporibus accusantium consequatur cumque velit maiores necessitatibus possimus ducimus ad commodi, explicabo numquam asperiores quis est illum. Modi ab nam excepturi adipisci omnis at natus dignissimos in! Optio sequi, nulla suscipit, voluptatibus beatae neque voluptates tenetur accusamus architecto impedit facere, alias possimus laboriosam nihil error est iste amet adipisci fuga assumenda corporis! Ipsam eligendi in officia blanditiis nisi a sed accusantium alias. Quod dignissimos sint suscipit corrupti. Laboriosam sint, dolor magni ipsum pariatur earum aliquid perferendis consectetur neque? Necessitatibus earum aperiam soluta cupiditate magnam beatae amet nihil, alias ullam cumque. Id repellendus est maiores, beatae facilis facere officia eum quis velit nemo amet officiis laboriosam. Debitis alias ex exercitationem aut? Voluptatibus beatae facere esse placeat adipisci tempora! Numquam quisquam harum consectetur consequuntur minima placeat ea, blanditiis quas voluptas minus eveniet vel sed. Quos dolore, possimus perferendis laudantium sapiente ipsam corporis tempore laborum nostrum rerum veritatis iusto, pariatur libero! A, distinctio. Tempore quos corrupti debitis, magni eligendi qui molestias. Optio, eos explicabo quaerat, molestiae quibusdam quidem ex suscipit autem excepturi tempora iure dolorem ut atque quae illum porro amet qui omnis. Autem quod, dolor quos assumenda non ipsum, quas in mollitia aliquid odit accusantium nulla. Eos laboriosam voluptas provident eaque, accusamus adipisci atque sit modi, saepe suscipit alias! Reiciendis eum assumenda eius? Voluptate, maxime tempora officia quia porro, commodi, repellendus consequuntur reprehenderit deleniti illo impedit maiores excepturi eligendi. Corrupti, totam? A, inventore explicabo dolorem magnam est repellendus, voluptatum iusto ratione nostrum consequatur adipisci optio. Quia labore quibusdam deserunt temporibus modi reiciendis aspernatur optio. Minima illum, consequatur, cupiditate alias earum repellat obcaecati itaque, aliquam illo blanditiis totam fugiat non! Atque quae quisquam eum, blanditiis dolores totam eos eveniet, amet deleniti laborum, consequatur fugiat maiores in iste culpa commodi nulla libero? Temporibus cum officia obcaecati impedit voluptatum ducimus fuga odit consequuntur porro, quis accusamus adipisci? Ab voluptate praesentium veniam assumenda, incidunt doloribus labore facilis. Odio magnam reprehenderit aut esse commodi iure cumque ad? Eaque alias mollitia facilis officia beatae, eum et excepturi, delectus ullam obcaecati, tempora minima aliquam soluta est reiciendis reprehenderit itaque corrupti quod neque magni ducimus eligendi animi perferendis necessitatibus! Consequatur, laudantium. Quod quae molestiae velit eveniet atque consequuntur ipsam aut, earum id necessitatibus veritatis corporis iure? Voluptatem, obcaecati ad? Ullam doloremque ducimus dolorem, assumenda voluptatum deleniti nostrum expedita unde, voluptas accusantium culpa. Iste veniam deserunt esse ipsa reiciendis tempore saepe iusto quas, odio, tempora officia unde placeat aspernatur debitis sit quisquam minima. Repellat debitis aliquam suscipit deserunt nam id delectus consequuntur assumenda voluptate, culpa ut quisquam, officia, vitae cum dolore minus corrupti hic quasi? Ab, culpa. Exercitationem, itaque voluptates. Labore, aliquam molestias. Sunt, cum, omnis cupiditate expedita incidunt architecto explicabo aperiam iure nisi eligendi libero, molestias magni molestiae tempora harum iste. Veniam, facilis possimus doloremque perspiciatis rem a officiis? Voluptate quae magnam eum laborum provident.
        </p>
        <div className="flex  items-center justify-end gap-2 text-gray-500">
          <Clock className="text-purple-500 " size={15} />
          <p className="">3 3 3</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
