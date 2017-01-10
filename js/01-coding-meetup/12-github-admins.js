const findAdmin = (list, lang) => list.filter((dev) => (dev.githubAdmin === 'yes') && (dev.language === lang));
