import Link from 'next/link'

export default function SimpleButtonTransparent(props) {
    const { text, url, span, additionalClasses } = props;
    
    // Create a string of additional classes
    const classes = `text-sm font-semibold leading-6 text-gray-900 ${additionalClasses}`;
    
    return (
      <Link href={url} className={classes}>
        {text} {span && <span aria-hidden="true">→</span>}
      </Link>
    );
  }