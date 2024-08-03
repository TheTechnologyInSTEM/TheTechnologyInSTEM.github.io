import Header from "../components/Header";

export const AboutPage = () => {
  return (
    <>
      <Header classes="pt-3 px-3"></Header>

      <div class="mt-5 pt-3">
        <div class="container">
          <div class="col-md-auto">
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
        <div class="card-group mx-auto w-50">
          <div class="card">
            <img
              src="https://i.postimg.cc/4NvSt1XT/IMG-3265.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Kaiyo Igaki</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://i.postimg.cc/dtmJ1dXh/452615222-1026020985545753-5136806581015565756-n.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Raj Patel</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
