class CategoryTemplate {
  data() {
    console.log("Category Template");
    return {
      pagination: {
        data: `categories/${site.organiation}`,
        size: 1,
      },
    };
  }
}

export default CategoryTemplate;
