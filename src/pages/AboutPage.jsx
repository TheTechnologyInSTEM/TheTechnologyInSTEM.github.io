import Header from "../components/Header";
import TypedComponent from "../components/TypedComponent";
import Footer from "../components/Footer";

export const AboutPage = () => {
  const about = ["About", "About"];
  const founder = ["Our Team", "Our Team"];

  return (
    <>
      <Header classes="pt-3 px-3"></Header>

      <div class="container-fluid mt-5 pt-3">
        <div class="row text-center py-3">
          <h1>
            <TypedComponent strings={about} doesLoop={false}></TypedComponent>
          </h1>
        </div>
        <div class="row py-3">
          <div class="col mx-10">
            <b>Welcome!</b>
            <br />
            <br />
            We're Kaiyo and Raj, and we are currently seniors enrolled in the
            International Baccalaureate Program at Granada Hills Charter High
            School. Together, we make up “The T in STEM”. Personally, both of us
            share a common love for STEM education, as we as students have been
            privileged enough to benefit tremendously from it, and experience
            its positive impacts day in and day out.
            <br />
            <br />
            However, when examining other regions inside our compact community,
            we have noticed a decline in the interest of STEM academia, causing
            us to wonder why that is. Thus, we interviewed and reflected upon
            our peers' experiences, and sometimes even our own, and we decided
            that the issue stems from a lack of proper exposure to STEM content,
            combined with inadequate learning opportunities. <br />
            <br />
            As young adults, we feel as if it is extremely important for us to
            take initiative in the changes that we want to see in our community.{" "}
            <br />
            <br />
            Thus, we created “The T in STEM” in late 2023, and our mission
            remains educating under-priveleged K-12 students in the San Fernando
            Valley on the topics of computer science, engineering, and
            mathematics. Through our project, not only have we benefited and
            served our community, but we have also grown as students, as
            teaching others is the most impactful way to learn. Additionally,
            with this project, we have expanded our leadership and mentorship
            skills greatly. <br />
            <br />
          </div>
        </div>
        <div class="row text-center py-3">
          <h1>
            <TypedComponent strings={founder} doesLoop={false}></TypedComponent>
          </h1>
        </div>

        <div className="row py-3">
          <div class="card-group mx-auto w-50">
            <div class="card mx-3 no-border">
              <img
                src="https://i.postimg.cc/4NvSt1XT/IMG-3265.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Kaiyo Igaki</h5>
                <p class="card-text">
                  Hi! My name is Kaiyo Igaki, and I'm a senior at Granada Hills
                  Charter. My biggest passions are web development (as painful
                  as it is sometimes) and chemistry. Outside of school, I like
                  to play the piano and compete in video game tournaments with
                  friends!
                </p>
              </div>
            </div>
            <div class="card mx-3 no-border">
              <img
                src="https://i.postimg.cc/Wzs9v6gf/unnamed-1-BR09-CDewj-transformed.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Raj Patel</h5>
                <p class="card-text">
                  Hello! My name is Raj Patel, and I am currently a senior
                  enrolled in the IB program at Granada Hills Charter High
                  School. Two of my biggest passions are tech and biology, and
                  outside of school, I love being physically active, listening
                  to music, and spending time with family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
